intAnswer = MsgBox("Prepare to add new portfolio item?", vbOKCancel, "Confirm")

If intAnswer = vbOK Then
  ' Modify index.html
  numOfItems = InputBox("Enter current max number of portfolio items:", "Enter Value")
  Const ForReading = 1
  Const ForWriting = 2
  Const strPre = "portfolio/"
  
  Set objFSO = CreateObject("Scripting.FileSystemObject")

  For i = numOfItems To 1 Step-1
    Set objFile = objFSO.OpenTextFile(".\index.html", ForReading)
    strText = objFile.ReadAll
    objFile.Close
    
    If (i < 10) Then
      strOld = strPre + "0" + CStr(i)
    Else
      strOld = strPre + CStr(i)
    End If
    
    strInc = i + 1
    
    If (strInc < 10) Then
      strNew = strPre + "0" + CStr(strInc)
    Else
      strNew = strPre + CStr(strInc)
    End If
    
    strNewText = Replace(strText, strOld, strNew)
    
    Set objFile = objFSO.OpenTextFile(".\index.html", ForWriting)
    objFile.Write strNewText
    objFile.Close
  Next
  
  ' Rename portfolio items
  Const SubPortfolioPath = ".\portfolio\portfolio"
  
  Set Portfolio = objFSO.GetFolder(".\portfolio")

  If Not objFSO.FolderExists(SubPortfolioPath) Then 
    Set SubPortfolio = objFSO.CreateFolder(SubPortfolioPath)
  Else
    Set SubPortfolio = objFSO.GetFolder(SubPortfolioPath)
  End If
  
  For Each File In Portfolio.Files
      portfolioFile = File.Name
      i = Int(Left(portfolioFile,2))
      
      If (i < 10) Then
        strOld = "0" + CStr(i)
      Else
        strOld = CStr(i)
      End If
      
      strInc = i + 1
    
      If (strInc < 10) Then
        strNew = "0" + CStr(strInc)
      Else
        strNew = CStr(strInc)
      End If
      
      portfolioFile = Replace(portfolioFile,strOld,strNew,1,1)
      
      If (portfolioFile<>File.Name) Then
        File.Move(SubPortfolio+"\"+portfolioFile)
      End If
  Next

  For Each File In SubPortfolio.Files
    subPortfolioFile = File.Name
    File.Move(Portfolio+"\"+subPortfolioFile)
  Next

  If objFSO.FolderExists(SubPortfolioPath) Then
    objFSO.DeleteFolder(SubPortfolioPath)
  End If
End If

MsgBox("[SUCCESS] Files modification complete")

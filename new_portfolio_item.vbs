intAnswer = MsgBox("Prepare to add new portfolio item?", vbOKCancel, "Confirm")

If intAnswer = vbOK Then
  ' Modify index.html
  numOfItems = InputBox("Enter current max number of portfolio items:", "Enter Value")
  Const ForReading = 1
  Const ForWriting = 2
  Const html = ".html"
  Const strPre = "portfolio/"
  
  Set objFSO = CreateObject("Scripting.FileSystemObject")

  Set objFile = objFSO.OpenTextFile(".\index.html", ForReading)
  strText = objFile.ReadAll
  objFile.Close

  For i = numOfItems To 1 Step-1
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
    
    strText = Replace(strText, strOld, strNew)
  Next
  
  Set objFile = objFSO.OpenTextFile(".\index.html", ForWriting)
  objFile.Write strText
  objFile.Close
  
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
    portfolioCurr = Int(Left(portfolioFile,2))
    
    ' Modify portfolio items
    If (Right(portfolioFile,5) = html) Then
      Set objFile = objFSO.OpenTextFile(File.Path, ForReading)
      strText = objFile.ReadAll
      objFile.Close
    
      If (portfolioCurr = 1) Then
        strText = Replace(strText, " style=" & Chr(34) & "visibility: hidden" & Chr(34), "")
      End If
      
      ' Start of Next
      portfolioNext = portfolioCurr + 1
      
      If (portfolioNext < 10) Then
        strOld = strPre + "0" + CStr(portfolioNext)
      Else
        strOld = strPre + CStr(portfolioNext)
      End If
      
      portfolioInc = portfolioNext + 1
      
      If (portfolioInc < 10) Then
        strNew = strPre + "0" + CStr(portfolioInc)
      Else
        strNew = strPre + CStr(portfolioInc)
      End If
      
      strText = Replace(strText, strOld, strNew)
      ' End of Next
      
      ' Start of Curr
      If (portfolioCurr < 10) Then
        strOld = strPre + "0" + CStr(portfolioCurr)
      Else
        strOld = strPre + CStr(portfolioCurr)
      End If
      
      portfolioInc = portfolioCurr + 1
      
      If (portfolioInc < 10) Then
        strNew = strPre + "0" + CStr(portfolioInc)
      Else
        strNew = strPre + CStr(portfolioInc)
      End If
      
      strText = Replace(strText, strOld, strNew)
      ' End of Curr
      
      ' Start of Prev
      portfolioPrev = portfolioCurr - 1
      
      If (portfolioPrev < 10) Then
        strOld = strPre + "0" + CStr(portfolioPrev)
      Else
        strOld = strPre + CStr(portfolioPrev)
      End If
      
      portfolioInc = portfolioPrev + 1
      
      If (portfolioInc < 10) Then
        strNew = strPre + "0" + CStr(portfolioInc)
      Else
        strNew = strPre + CStr(portfolioInc)
      End If
      
      strText = Replace(strText, strOld, strNew)
      ' End of Prev
      
      Set objFile = objFSO.OpenTextFile(File.Path, ForWriting)
      objFile.Write strText
      objFile.Close
    End If
    
    If (portfolioCurr < 10) Then
      strOld = "0" + CStr(portfolioCurr)
    Else
      strOld = CStr(portfolioCurr)
    End If
    
    portfolioInc = portfolioCurr + 1
  
    If (portfolioInc < 10) Then
      strNew = "0" + CStr(portfolioInc)
    Else
      strNew = CStr(portfolioInc)
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

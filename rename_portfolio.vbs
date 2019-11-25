intAnswer = Msgbox("Proceed to rename portfolio items?", vbOKCancel, "Confirm")

If intAnswer = vbOK Then
  Const SubPortfolioPath = ".\portfolio\portfolio"

  Set objFSO = CreateObject("Scripting.FileSystemObject")
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

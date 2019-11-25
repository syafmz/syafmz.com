intAnswer = Msgbox("Proceed to modify index.html?", vbOKCancel, "Confirm")

If intAnswer = vbOK Then
  numOfItems = InputBox("Enter current max number of portfolio items:", "Enter Value")
  Const ForReading = 1
  Const ForWriting = 2
  Const strPre = "portfolio/"
  

  For i = numOfItems To 1 Step-1
    Set objFSO = CreateObject("Scripting.FileSystemObject")
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
End If

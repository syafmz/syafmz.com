var i, content;
content = document.getElementsByClassName("content");

for (i = 1; i < content.length; i++) 
{
  content[i].style.display = "none";
}

function openContent(pageName) 
{
  for (i = 0; i < content.length; i++) 
  {
    content[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}

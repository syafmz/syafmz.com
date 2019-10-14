function openContent(pageName, elmnt) 
{
  // Hide all elements with class="tabcontent" by default */
  var i, content;
  content = document.getElementsByClassName("content");
  
  for (i = 0; i < content.length; i++) 
  {
    content[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); 

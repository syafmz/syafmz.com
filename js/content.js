var i;
var content = document.getElementsByClassName("content");
var nav = {about:0, portfolio:1, resume:2, contact:3};
var menu = document.getElementById("menu");
var li = menu.getElementsByClassName("btn");
var path = window.location.href.split('#');

function resetContent()
{  
  var current = document.getElementsByClassName("active");

  // If there's no active class
  if (current.length > 0) 
  {
    current[0].className = current[0].className.replace(" active", "");
  }
  
  for (i = 0; i < content.length; i++) 
  {
    content[i].style.display = "none";
  }
}

function showContent(pageName, n)
{
  document.getElementById(pageName).style.display = "block";
  li[n].className += " active";
}

function openContent(pageName, n) 
{
  resetContent();
  showContent(pageName, n);
}

resetContent();

if(typeof path[1] != 'undefined' && path[1])
{
  var myContent = path[1];
  showContent(myContent, nav[myContent]);  
}
else
{
  showContent('about', nav["about"]);
}

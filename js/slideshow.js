const elapse = 10000;
var slideIndex = 1;
var myTimer;
var slideshowContainer;


window.addEventListener("load",function() 
{
  showSlides(slideIndex);
  myTimer = setInterval(function(){plusSlides(1)}, elapse);
  slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  slideshowContainer.addEventListener('mouseenter', pause)
  slideshowContainer.addEventListener('mouseleave', resume)
})

function plusSlides(n)
{
  clearInterval(myTimer);
  
  if (n < 0)
  {
    showSlides(slideIndex -= 1);
  } 
  else 
  {
   showSlides(slideIndex += 1); 
   
  }
  
  if (n === -1)
  {
    myTimer = setInterval(function(){plusSlides(n + 2)}, elapse);
  } 
  else 
  {
    myTimer = setInterval(function(){plusSlides(n + 1)}, elapse);
  }
}

function currentSlide(n)
{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, elapse);
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) 
  {
    slideIndex = 1
  }
  
  if (n < 1) 
  {
    slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].classList.add("fadeIn");
}

pause = () => 
{
  clearInterval(myTimer);
}

resume = () =>
{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, elapse);
}

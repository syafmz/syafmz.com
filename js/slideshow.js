const elapse=12000;var slideIndex=1;var myTimer;var slideshowContainer;window.addEventListener("load",function(){showSlides(slideIndex);myTimer=setInterval(function(){plusSlides(1)},elapse);slideshowContainer=document.getElementsByClassName("slideshow-inner")[0];slideshowContainer.addEventListener("mouseenter",pause);slideshowContainer.addEventListener("mouseleave",resume)});function plusSlides(a){clearInterval(myTimer);if(a<0){showSlides(slideIndex-=1)}else{showSlides(slideIndex+=1)}if(a===-1){myTimer=setInterval(function(){plusSlides(a+2)},elapse)}else{myTimer=setInterval(function(){plusSlides(a+1)},elapse)}}function currentSlide(a){clearInterval(myTimer);myTimer=setInterval(function(){plusSlides(a+1)},elapse);showSlides(slideIndex=a)}function showSlides(c){var a;var b=document.getElementsByClassName("mySlides");if(c>b.length){slideIndex=1}if(c<1){slideIndex=b.length}for(a=0;a<b.length;a++){b[a].style.display="none"}b[slideIndex-1].style.display="block";b[slideIndex-1].classList.add("fadeIn")};

pause = () =>
{
  clearInterval(myTimer);
}

resume = () =>
{
  clearInterval(myTimer);
  myTimer = setInterval(function ()
  {
    plusSlides(slideIndex)
  }, elapse);
}

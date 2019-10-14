var winheight, docheight, trackLength, throttlescroll;

function getDocHeight() 
{
  var D = document;
  return Math.max
    (
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
    );
}

function getmeasurements()
{
  winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
  docheight = getDocHeight();
  trackLength = docheight - winheight;
}
 
function amountscrolled()
{
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var pctScrolled = Math.floor(scrollTop/trackLength * 100);
  displayHeaderBorder(pctScrolled);
};

function displayHeaderBorder(pctScrolled)
{
  //console.log(pctScrolled + '% scrolled');
  
  var h = document.getElementById("header");
  
  if(pctScrolled > 1)
  {
    h.style.borderBottom = "1px solid #000";
    h.style.boxShadow = "0px 1px 5px rgba(0,0,0,0.5)";
  }
  else
  {
    h.style.borderBottom = "none";
    h.style.boxShadow = "none";    
  }
};

getmeasurements();
 
window.addEventListener
(
  "resize", 
  function()
  {
    getmeasurements();
  }, 
  false
);
 
window.addEventListener
(
  "scroll", 
  function()
  {
    clearTimeout(throttlescroll);
    throttlescroll = setTimeout
    (
      function()
      {
        amountscrolled();
      }, 
      10
    );
  }, 
  false
);

//Variables for the Soccer Information And Soccer Picture, it will know where the information will be from the HTML Page.
var soccerInfo=document.getElementById("soccerInfo");
var soccerpic=document.getElementById("soccerpic");

//This will make a dropdown where you click on the Image the text will come at the bottom of the Image, when you click it back, the information will go up and hide behing the image.
//If Else Statement, where when there is no information showing and you click on the image, the block will show the information. If the information is showing and you click on the image again, it will turn into none again.
soccerpic.addEventListener('click',function(){
    
 if (soccerInfo.style.display === "none"){
         soccerInfo.style.display = "block";
     }
     else {
       soccerInfo.style.display = "none";
     }
});

//Variables for the Basketball Information And Basketball Picture, it will know where the information will be from the HTML Page.
var basketballInfo=document.getElementById("basketballInfo");
var basketballpic=document.getElementById("basketballpic");

//This will make a dropdown where you click on the Image the text will come at the bottom of the Image, when you click it back, the information will go up and hide behing the image.
//If Else Statement, where when there is no information showing and you click on the image, the block will show the information. If the information is showing and you click on the image again, it will turn into none again.
basketballpic.addEventListener('click', function(){
    
if (basketballInfo.style.display === "none"){
         basketballInfo.style.display = "block";
    }
    else {
        basketballInfo.style.display = "none";
    }
    
});

//Variables for the Hockey Information And Hockey Picture, it will know where the information will be from the HTML Page.
var hockeyInfo=document.getElementById("hockeyInfo");
var hockeypic=document.getElementById("hockeypic");

//This will make a dropdown where you click on the Image the text will come at the bottom of the Image, when you click it back, the information will go up and hide behing the image.
//If Else Statement, where when there is no information showing and you click on the image, the block will show the information. If the information is showing and you click on the image again, it will turn into none again.
hockeypic.addEventListener('click',function(){
    
 if (hockeyInfo.style.display === "none"){
        hockeyInfo.style.display = "block";
     }
     else {
         hockeyInfo.style.display = "none";
     }
 
});

//Variables for the Baseball Information And Baseball Picture, it will know where the information will be from the HTML Page.
var baseballInfo=document.getElementById("baseballInfo");
var baseballpic=document.getElementById("baseballpic");

//This will make a dropdown where you click on the Image the text will come at the bottom of the Image, when you click it back, the information will go up and hide behing the image.
//If Else Statement, where when there is no information showing and you click on the image, the block will show the information. If the information is showing and you click on the image again, it will turn into none again.
baseballpic.addEventListener('click',function(){
    
if (baseballInfo.style.display === "none"){
      baseballInfo.style.display = "block";
     }
     else {
         baseballInfo.style.display = "none";
     }
});


var examplepic=document.getElementById("examplepic");
var exampleInfo=document.getElementById("exampleInfo");

examplepic.addEventListener('click', function(){
 
 if (exampleInfo.style.display === "none"){
   exampleInfo.style.display = "block";
 }
  else {
   exampleInfo.style.display = "none";
  }
 
});
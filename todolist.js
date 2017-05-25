var textinput = document.getElementById("textinput");
var button1input = document.getElementById("button1input");
var button2input = document.getElementById("button2input");
var display = document.getElementById("display");
var selectinput = document.getElementById("selectinput");

button1input.addEventListener("click", function(){
    
    
           var text = textinput.value; 
           var select = selectinput.value;
           
           display.innerHTML += "<div style='color:"+select+"'>"+text+"</div>";
    
});

button2input.addEventListener("click", function(){
    
    display.innerHTML = "";
});

display.addEventListener("click", function(evt) {
    evt.target.parentNode.removeChild(evt.target);
})
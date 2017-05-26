//This tells the variable to point to the ids at the HTML Elements 
var textinput = document.getElementById("textinput");
var button1input = document.getElementById("button1input");
var button2input = document.getElementById("button2input");
var display = document.getElementById("display");
var selectinput = document.getElementById("selectinput");

//Color Select Button, when you write the text in the input and and select on which color you want, it will display the word woth the color of your choose
button1input.addEventListener("click", function(){
    
    
           var text = textinput.value; 
           var select = selectinput.value;
           
           display.innerHTML += "<div style='color:"+select+"'>"+text+"</div>";
    
});


//Reset Button, click on the button, it will reset the list to blank
button2input.addEventListener("click", function(){
    
    display.innerHTML = "";
});

display.addEventListener("click", function(evt) {
    evt.target.parentNode.removeChild(evt.target);
})
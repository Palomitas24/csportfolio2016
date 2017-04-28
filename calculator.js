//DID NOT COPY!!! GOT HELP FROM FRIENDS AND AND DID MOST OF THE WORK MYSELF!!!

//Variables for the functions of in the html page
var num1input = document.getElementById("num1");
var selector = document.getElementById("selector");
var num2input = document.getElementById("num2");
var solve = document.getElementById("solve");
var display = document.getElementById("display");

//This is where you pick what operation you want and the answer will be display if the selected opesration is click else it change to another one.
solve.addEventListener("click", function(){
  var num1 = num1input.value;
  var num2 = num2input.value;
  
 if(selector.value === "+"){
    var answer = +num1 + +num2;
    display.innerHTML = answer;
  }
  else if(selector.value === "-"){
    var answe = num1 - num2; 
    display.innerHTML = answe;
  }
   else if(selector.value === "*"){
    var answ = num1 * num2; 
    display.innerHTML = answ;
  }
   else if(selector.value === "/"){
    var ans = num1 / num2; 
    display.innerHTML = ans;
  }
  else if(selector.value === "^"){
    var an = Math.pow(num1,num2);
    display.innerHTML = an;
  }
  else if(selector.value === "square root"){
    var a = Math.sqrt(num2);
    display.innerHTML = a;
  }
  else if(selector.value === "cos"){
     var a = Math.cos(num2);
     display.innerHTML = a;
  }
  else if (selector.value === "sin"){
      var a = Math.sin(num2);
      display.innerHTML = a;
  }
  else if (selector.value === "tan"){
      var a = Math.tan(num2);
      display.innerHTML = a;
  }
});
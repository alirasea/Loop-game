
var loopButton = document.getElementById("loop-btn") 
var streetColorButton = document.getElementById("street-color-btn")
var loopGameSection = document.getElementById("loop-game")
var loopColorSection = document.getElementById("color-game")
var loopClick = document.getElementById("loop-click")
var startLoop = document.getElementById("start-loop")
var endLoop = document.getElementById("end-loop")
var resultLoop = document.getElementById("loop-result")
var redLoop = document.getElementById("red")
var yellowLoop = document.getElementById("yellow")
var greenLoop = document.getElementById("green")
var resultColorSection = document.getElementById("result-color-section")

loopButton.addEventListener("click", function(){
    streetColorButton.classList.remove("--active")
    loopButton.classList.add("--active")
    loopGameSection.classList.remove("hidden")
    loopColorSection.classList.add("hidden")
})

streetColorButton.addEventListener("click", function(){
    loopButton.classList.remove("--active");
    streetColorButton.classList.add("--active");
    loopColorSection.classList.remove("hidden");
   loopGameSection.classList.add("hidden");
})

loopClick.addEventListener("click", function(){
         resultLoop.innerText= "";
    var startLoopNumber = startLoop.value;
    var endLoopNumber = endLoop.value;
    if (startLoopNumber === "" || endLoopNumber === ""){
        var errEl = document.createElement("h3")
        errEl.setAttribute("class", "error-msg");
        errEl.innerText="Both inputs should be filled..";
        resultLoop.appendChild(errEl)
    }
    else{
          math(Number(startLoopNumber),Number(endLoopNumber))
    }      
})

function math(a , b){
    if(a>b){  
    for(i = a; i >= b ; i--){
       resultLoop.innerHTML += "<span class='num'>" + i + "<span>";
    }
    }
    else if(a<b){  
    for(i = a; i <= b ; i++){
        
        resultLoop.innerHTML += "<span>" + i + "<span>";
    }
    }
    else{  
        var errEl = document.createElement("h3")
        errEl.setAttribute("class", "error-msg");
        errEl.innerText="the strart point is equal the last point..";
        resultLoop.appendChild(errEl)
        
    }
   }

redLoop.addEventListener("click", function(){
    resultColorSection.innerText= "";
    var letop = document.createElement("h3")
    letop.setAttribute("class", "letopp")
    letop.innerText = "Let op you have to stop"
    resultColorSection.appendChild(letop)

})
yellowLoop.addEventListener("click", function(){
    resultColorSection.innerText= "";
    var letop = document.createElement("h3")
    letop.setAttribute("class", "letopp")
    letop.innerText = "Let op slow down"
    resultColorSection.appendChild(letop)

})
greenLoop.addEventListener("click", function(){
    resultColorSection.innerText= "";
    var letop = document.createElement("h3")
    letop.setAttribute("class", "letopp")
    letop.innerText = "You can go"
    resultColorSection.appendChild(letop)

})










/*  function ali (start, end){
    for(i = start; i <= end; i++){
        console.log(i)
    }
}
ali(2,10) */

/* 
var first = prompt("file your first nummber")
var last = prompt("choose the last nummber")

function math(a , b){
 if(a>b){  
 for(i = a; i >= b ; i--){
    console.log(i)
 }
 }
 else if(a<b){  
 for(i = a; i <= b ; i++){
    console.log(i)
 }
 }
 else{  
 console.log("the strart point is equal the last point")
 }
}
math(first, last) 
 */
 

/* var color = prompt("inter your color")
color = color.toLowerCase()
function trafic() {
    if (color === "red"){
        console.log ("You have to stop")
    }
    else if (color === "yellow"){
        console.log ("You have to low your speade")
    }
    if (color === "green"){
        console.log ("You have to go")
    }
    else{
        console.log ("this is not the correct color")
    }
}

trafic() */


                       // this is how to link the html with js
const variablename = document.getElementById("myId"); // if is it by id
const elementsWithClass = document.getElementsByClassName("myClass"); // if is it with class name  
const allParagraphs = document.getElementsByTagName("p");// if is it linked with tags

//the first assingement

/* 
var age = prompt("enter your age")
var Name = prompt("enter your name")

if ( age >= 18){
    console.log("recording")
}
else{
    console.log("you are not recording")
}
if ( Name === "John"){
    console.log("Hello")
}
else{
    console.log("you are not John")
} */


//the second assingement


/* 
function sum (sum1, sum2){
    return  sum1 + sum2
   
}
function sam (){
    return  "Hello"  
}

const hello = reverse().sam()
console.log(hello)

const ali  = sum(3,3);
console.log(ali)

console.log */
const leftup = document.getElementById("left-up");
const left=document.getElementById("left");
const right= document.getElementById("right");
const up =document.getElementById("up");
const circle=document.getElementById("circle");
const down =document.getElementById("down");
const rightup =document.getElementById("right-up");
const leftdown=document.getElementById("left-down");
const rightdown=document.getElementById("right-down");


circle.addEventListener("click",function(){
    top.classList.toggle("top")
})

leftup.addEventListener("click",function(){
    top.classList.toggle("top-leftup")
})

left.addEventListener("click",function(){
    top.classList.toggle("top-left")
})

right.addEventListener("click",function(){
    top.classList.toggle("top-right")
})

up.addEventListener("click",function(){
    top.classList.toggle("top-up")
})

down.addEventListener("click",function(){
    top.classList.toggle("top-down")
})

rightup.addEventListener("click",function(){
    top.classList.toggle("top-rightup")
})

leftdown.addEventListener("click",function(){
    top.classList.toggle("top-leftdown")
})

rightdown.addEventListener("click",function(){
    top.classList.toggle("top-rightdown")
})
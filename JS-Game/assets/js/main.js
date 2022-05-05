let top = document.getElementById("circleId");
let leftup = document.getElementById("left-up");
let left = document.getElementById("left");
let right = document.getElementById("right");
let up = document.getElementById("up");
let circle = document.getElementById("circle");
let down = document.getElementById("down");
let rightup = document.getElementById("right-up");
let leftdown = document.getElementById("left-down");
let rightdown = document.getElementById("right-down");

circle.addEventListener("click", function () {
    top.classList.toggle("top");
})

leftup.addEventListener("click", function () {
    top.classList.toggle("top-leftup");
})

left.addEventListener("click", function () {
    top.classList.toggle("top-left");
})

right.addEventListener("click", function () {
    top.classList.toggle("top-right");
})

up.addEventListener("click", function () {
    top.classList.toggle("top-up");
})

down.addEventListener("click", function () {
    top.classList.toggle("top-down");
})

rightup.addEventListener("click", function () {
    top.classList.toggle("top-rightup");
})

leftdown.addEventListener("click", function () {
    top.classList.toggle("top-leftdown");
})

rightdown.addEventListener("click", function () {
    top.classList.toggle("top-rightdown");
})
//these are all variables
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const button = document.querySelectorAll(".selection button");
const showIcon = document.querySelector(".show i");
const computerShowIcon = document.querySelector(".computer i");


const randomClasses = ["fas fa-regular fa-hand-back-fist", "fas fa-regular fa-hand", "fas fa-regular fa-hand-scissors",];
const text = document.getElementById("demo");
const text2 = document.getElementById("demo2");


//game functionality
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListner("click",(e) => {
            //random rock paper scissor for the computer and clicked ones for the player
            let clickedBtn = e.target.className;
        })
    }
}
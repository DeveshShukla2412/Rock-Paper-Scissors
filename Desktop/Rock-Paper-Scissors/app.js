const userScore=0;
const computerScore=0;
const userScore_span=document.getElementById("user_score");
const computerScore_span=document.getElementById("comp_score");
const scoreBoard_div=document.querySelector(".scoreboard");
const result_div=document.querySelector(".result");
const rock_div=document.querySelector("#r");
const paper_div=document.querySelector("#p");
const scissors_div=document.querySelector("#s");



function main()
{
rock_div.addEventListener('click',function(){
game("r");
})

paper_div.addEventListener('click',function()
{
game("p");
})

scissors_div.addEventListener('click',function()
{
game("s");
})
}

main();

function getComputerChoice()
{
const choice = ['r', 'p' , 's'];
const randomNumber = Math.floor((Math.random() * 3 ));
return choice[randomNumber];
}

getComputerChoice();

function game(userChoice)
{
const computerChoice = getComputerChoice();


}
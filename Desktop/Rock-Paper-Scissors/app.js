let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user_score");
const computerScore_span=document.getElementById("comp_score");
const scoreBoard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result > p");
const rock_div=document.querySelector("#r");
const paper_div=document.querySelector("#p");
const scissors_div=document.querySelector("#s");

function main()
{
rock_div.addEventListener('click',function(){
game("r");
});

paper_div.addEventListener('click',function()
{
game("p");
});

scissors_div.addEventListener('click',function()
{
game("s");
});
}

main();

function getComputerChoice()
{
const choice = ['r', 'p' , 's'];
const randomNumber = Math.floor((Math.random() * 3 ));


console.log("Random Number : > " + randomNumber);


return choice[randomNumber];
}


//console.log("Computer choice : >" + getComputerChoice());


function convertToWord(letter)
{
if(letter==="r") return "Rock";
if(letter==="p") return "Paper";
else "Scissors";
}

function win(userChoice,computerChoice)
{
userScore++;
userScore_span.innerHTML=userScore;
computerScore_span.innerHTML=computerScore;
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} Beats  ${convertToWord(computerChoice)}${smallCompWord}. You Win !`;
}

function lose(userChoice,computerChoice)
{
computerScore++;
userScore_span.innerHTML=userScore;
computerScore_span.innerHTML=computerScore;
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} loses to  ${convertToWord(computerChoice)}${smallCompWord}. You Lost !`;

}

function draw(userChoice,computerChoice)
{
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} equals to  ${convertToWord(computerChoice)}${smallCompWord}. It's a draw !`;
}


//console.log("Computer Choice : > " + getComputerChoice());




function game(userChoice)
{
const computerChoice = getComputerChoice();

console.log("Computer Choice : > " + computerChoice);

switch (userChoice + computerChoice)
{
case "rs":
case "pr":
case "sp":
win(userChoice,computerChoice);
break;
case "sr":
case "rp":
case "ps":
lose(userChoice,computerChoice);
break;
case "rr":
case "pp":
case "ss":
draw(userChoice,computerChoice);
break;
}
}
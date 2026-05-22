function getComputerchoice(){
    let n=Math.random();
    n=n*10;
    n=parseInt(n);
    if(n>=0 && n<=3){
        return "rock";
    }
    else if(n>3 && n<=6){
        return "paper";
    }
    else{
        return "scissors";
    }
}
const result=document.querySelector("#results");
const roundResult=document.createElement("p");
const score=document.createElement("p");
const winner=document.createElement("h3");

result.appendChild(roundResult);
result.appendChild(score);
result.appendChild(winner);

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
    return;
    }
    if(humanChoice===computerChoice){
        roundResult.textContent="Draw";
    }
    else if(humanChoice==="rock"&&computerChoice==="scissors" || humanChoice==="paper"&&computerChoice==="rock" || humanChoice==="scissors"&&computerChoice==="paper"){
        roundResult.textContent="You won ! "+humanChoice+" beats "+computerChoice;
        humanScore+=1;
    }
    else{
        roundResult.textContent="You lost. " +computerChoice+" beats "+humanChoice;
        computerScore+=1;
    }

    score.textContent="Player: "+humanScore+" | Computer: "+computerScore;

    if(humanScore===5){
        winner.textContent="You won the game !";
    }
    if(computerScore===5){
        winner.textContent="The Computer won the game";
    }
}
const buttons=document.querySelectorAll("button");

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        playRound(btn.id,getComputerchoice());
    });
});


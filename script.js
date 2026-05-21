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
function getHumanchoice(){
    let ch=prompt("Choose Rock , Paper or Scissors");
    //Assuming valid input as said in the directions
    return ch;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice) {
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice===computerChoice){
        console.log("Draw");
    }
    else if(humanChoice==="rock"&&computerChoice==="scissors" || humanChoice==="paper"&&computerChoice==="rock" || humanChoice==="Scissors"&&computerChoice==="paper"){
        console.log("You won ! "+humanChoice+" beats "+computerChoice);
        humanScore+=1;
    }
    else{
        console.log("You lost. " +computerChoice+" beats "+humanChoice);
        computerScore+=1;
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        const humanSelection = getHumanchoice();
        const computerSelection = getComputerchoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore>computerScore){
        console.log("You won the game !");
    }
    else if(computerScore>humanScore){
        console.log("You lost. The computer won the game");
    }
    else{
        console.log("The game ended in a draw.");
    }
}
playGame();

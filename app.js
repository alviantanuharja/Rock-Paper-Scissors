const choices = ['Rock', 'Paper', 'Scissors'];

function rngJesus(){
    let num = Math.random();
    num *= 3; 
    return Math.floor(num);
}

function getComputerChoice(){
    return choices[rngJesus()];
}

let playerScore = 0;
let computerScore = 0;

function startRound(userIn, getComp){
    let playSel = userIn.toLowerCase();
    let compSel = getComp.toLowerCase();
    let playerScore = 0;
    let computerScore = 0;

    console.log(playSel);
    console.log(compSel);

    if (playSel == compSel){
        document.getElementById('maintext').innerHTML = "It's a tie!";
        return
    }

    switch(playSel){
        case "rock":
            switch(compSel){
                case "paper":
                    computerScore += 1;
                    document.getElementById('maintext').innerHTML = "You Lose! Paper beats Rock";
                    return;
                case "scissors":
                    playerScore += 1;
                    document.getElementById('maintext').innerHTML = "You win! Rock beats Scissors";
                    return;
            }
        case "paper":
            switch(compSel){
                case "scissors":
                    computerScore += 1;
                    document.getElementById('maintext').innerHTML = "You lose! Scissors beats Paper";
                    return;
                case "rock":
                    playerScore += 1;
                    document.getElementById('maintext').innerHTML = "You win! Paper beats Rock";
                    return;
            }
        case "scissors":
            switch(compSel){
                case "rock":
                    computerScore += 1;
                    document.getElementById('maintext').innerHTML = "You lose! Rock beats Scissors";
                    return;
                case "paper":
                    playerScore += 1;
                    document.getElementById('maintext').innerHTML = "You win! Scissors beats Paper";
                    return;
            }
    }
}




//Helper functions 

//Entire form element
const form = document.getElementById('form')

//Submit refreshes page by default
form.addEventListener('submit', (e) => {
    const userInput= document.getElementById('userInput').value;
    const result = startRound(userInput, getComputerChoice()); 
    e.preventDefault();
})




// function game(){
// //Entire form element
// const form = document.getElementById('form')

// //Submit refreshes page by default
// form.addEventListener('submit', (e) => {
//     const userInput= document.getElementById('userInput').value;
//     const result = startRound(userInput, getComputerChoice()); 
    
//     e.preventDefault();
// })
    
// }



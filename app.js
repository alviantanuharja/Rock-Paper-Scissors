const choices = ['Rock', 'Paper', 'Scissors'];

function rngJesus(){
    let num = Math.random();
    num *= 3; 
    return Math.floor(num);
}

function getComputerChoice(){
    return choices[rngJesus()];
}

function startRound(playerSel, computerSel){
    let playSel = playerSel.toLowerCase();
    let compSel = computerSel.toLowerCase();

    if (playerSel == compSel){
        return "It's a tie!";
    }

    switch(playSel){
        case "rock":
            switch(compSel){
                case "paper":
                    return "You Lose! Paper beats Rock";
                case "scissors":
                    return "You win! Rock beats Scissors";
            }
        case "paper":
            switch(compSel){
                case "scissors": 
                    return "You lose! Scissors beats Paper";
                case "rock":
                    return "You win! Paper beats Rock";
            }
        case "scissors":
            switch(compSel){
                case "rock":
                    return "You lose! Rock beats Scissors";
                case "paper":
                    return "You win! Scissors beats Paper";
            }
    }
}

//Entire form element
const form = document.getElementById('form')

//Submit refreshes page by default
form.addEventListener('submit', (e) => {
    const userInput= document.getElementById('userInput').value;
    const result = startRound(userInput, getComputerChoice()); 
    console.log(result);
    e.preventDefault();
})






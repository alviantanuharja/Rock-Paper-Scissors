const choices = ['Rock', 'Paper', 'Scissors'];

function rngJesus(){
    let num = Math.random();
    num *= 3; 
    return Math.floor(num);
}

function getComputerChoice(){
    alert("The computer has chosen " + choices[rngJesus()]);
}





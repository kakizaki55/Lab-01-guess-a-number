
//  import { submitreset, changeDisplay, guessCount } from './function.js';

const resetButton = document.getElementById('reset-button');
const submitButton = document.getElementById('submit-button');
const rulesAndDisplay = document.getElementById('rules-and-display');
const remainingDisplay = document.getElementById('guess-remaining');
const easyModeButton = document.getElementById('easy-mode');

let playerGuess = document.getElementById('player-guess');
let targetNumber = Number(Math.floor((Math.random() * 20) + 1));

resetButton.hidden = true;

let remainingGuess = 4;
remainingDisplay.textContent = remainingGuess;
let playerPoints = 0;
let playerLosses = 0;

const losesDisplay = document.getElementById('loses-display');
const pointsDisplay = document.getElementById('points-display');
losesDisplay.textContent = playerLosses;
pointsDisplay.textContent = playerPoints;

function submitreset(){
    submitButton.hidden = true;
    resetButton.hidden = false;
}
function changeDisplay(newtext){
    rulesAndDisplay.innerHTML = newtext;
}
function guessCount(){
    remainingDisplay.textContent = remainingGuess;
}


submitButton.addEventListener('click', () =>{
    
    remainingGuess --;
    guessCount();

    console.log(targetNumber);
    console.log(Number(playerGuess.value));

    if (Number(playerGuess.value) === targetNumber){
        changeDisplay('Congrats you got it!!');
        // console.log('congrats you got it!')
        submitreset();
        playerPoints += remainingGuess + 1 ;
        pointsDisplay.textContent = playerPoints;

    } else if (Number(remainingGuess) === 0){
            //  console.log('you are out of guess')
        changeDisplay('You have used up all your tries...');
        submitreset();
        playerLosses ++;
        losesDisplay.textContent = playerLosses;
             
          
    } else if (Number(playerGuess.value) <= targetNumber){
        changeDisplay('Try picking a bigger number'); 
        // console.log('pick a bigger number')

    } else if (Number(playerGuess.value) >= targetNumber){
        changeDisplay('Try picking a smaller number'); 
        // console.log('pick a smaller number')
    };

});
 
resetButton.addEventListener('click', ()=>{
    remainingGuess = 4;
    submitButton.hidden = false;
    resetButton.hidden = true;
    guessCount();
    playerGuess.value = '';
    changeDisplay(`you have ${remainingGuess} tries to guess a number between 1-20.`); 

});
easyModeButton.addEventListener('click', ()=>{
    playerGuess.value = '';
    remainingGuess = 8;
    changeDisplay(`you have ${remainingGuess} tries to guess a number between 1-20.`);
    guessCount();
});
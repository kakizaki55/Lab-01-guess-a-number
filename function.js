const rulesAndDisplay = document.getElementById('rules-and-display');
const resetButton = document.getElementById('reset-button');
const submitButton = document.getElementById('submit-button');
const remainingDisplay = document.getElementById('guess-remaining');

export function submitreset(){
    submitButton.hidden = true;
    resetButton.hidden = false;
};
export function changeDisplay(newtext){
    rulesAndDisplay.innerHTML = newtext;
};
export function guessCount(){
    remainingDisplay.textContent = remainingGuess;
};

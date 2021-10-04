


const resetButton = document.getElementById('reset-button');
const submitButton = document.getElementById('submit-button');
const rulesAndDisplay = document.getElementById('rules-and-display');
const remainingDisplay = document.getElementById('guess-remaining');

let remainingGuess = 4;

let playerGuess = document.getElementById('player-guess');

remainingDisplay.textContent = remainingGuess;

const targetNumber = Number(Math.floor((Math.random() *20) +1));

resetButton.hidden = true;

  submitButton.addEventListener('click' , () =>{
    // console.log('clicky')
    remainingGuess --;
    remainingDisplay.textContent = remainingGuess;

    console.log(targetNumber);
    console.log(Number(playerGuess.value));

      if(Number(remainingGuess) === 0){
        //  console.log('you are out of guess')
         rulesAndDisplay.innerHTML = 'You have used up all your tries...';
         submitButton.hidden = true;
         resetButton.hidden = false;

      }else if(Number(playerGuess.value) == targetNumber){
        rulesAndDisplay.innerHTML = 'Congrats you got it!!';
        // console.log('congrats you got it!')
        submitButton.hidden = true;
         resetButton.hidden = false;

      }else if(Number(playerGuess.value) <= targetNumber){
        rulesAndDisplay.innerHTML = 'Try picking a bigger number';
        // console.log('pick a bigger number')

      }else if(Number(playerGuess.value) >= targetNumber){
        rulesAndDisplay.innerHTML = 'Try picking a smaller number';
        // console.log('pick a smaller number')
      }

  });
 
  resetButton.addEventListener('click', ()=>{
    remainingGuess = 4;
    submitButton.hidden = false;
    resetButton.hidden = true;
    remainingDisplay.textContent = remainingGuess

  });
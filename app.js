


const resetButton = document.getElementById('reset-button');
const submitButton = document.getElementById('submit-button');
const rulesAndDisplay = document.getElementById('rules-and-display');
const remainingDisplay = document.getElementById('guess-remaining');
const easyModeButton = document.getElementById('easy-mode');

let remainingGuess = 4;

let playerGuess = document.getElementById('player-guess');

remainingDisplay.textContent = remainingGuess;

let targetNumber = Number(Math.floor((Math.random() *20) +1));

resetButton.hidden = true;

let playerPoints = 0;
let playerLosses = 0;
const losesDisplay = document.getElementById('loses-display')
const pointsDisplay= document.getElementById('points-display')
losesDisplay.textContent = playerLosses;
pointsDisplay.textContent = playerPoints;

  submitButton.addEventListener('click' , () =>{
    // console.log('clicky')
    remainingGuess --;
    remainingDisplay.textContent = remainingGuess;

    console.log(targetNumber);
    console.log(Number(playerGuess.value));

      if(Number(playerGuess.value) == targetNumber){
        rulesAndDisplay.innerHTML = 'Congrats you got it!!';
        // console.log('congrats you got it!')
          submitButton.hidden = true;
          resetButton.hidden = false;
          playerPoints += remainingGuess+1 ;
          pointsDisplay.textContent = playerPoints;

      }else if(Number(remainingGuess) === 0){
            //  console.log('you are out of guess')
             rulesAndDisplay.innerHTML = 'You have used up all your tries...';
             submitButton.hidden = true;
             resetButton.hidden = false;
             playerLosses ++;
             losesDisplay.textContent = playerLosses;
             
          
      }else if(Number(playerGuess.value) <= targetNumber){
        rulesAndDisplay.innerHTML = 'Try picking a bigger number';
        // console.log('pick a bigger number')

      }else if(Number(playerGuess.value) >= targetNumber){
        rulesAndDisplay.innerHTML = 'Try picking a smaller number';
        // console.log('pick a smaller number')
      };

  });
 
  resetButton.addEventListener('click', ()=>{
      remainingGuess = 4;
      submitButton.hidden = false;
      resetButton.hidden = true;
      remainingDisplay.textContent = remainingGuess;
      playerGuess.value ='';
      rulesAndDisplay.innerHTML = `you have ${remainingGuess} tries to guess a number between 1-20.`

  });
easyModeButton.addEventListener('click', ()=>{
  remainingGuess = 8;
  rulesAndDisplay.innerHTML = `you have ${remainingGuess} tries to guess a number between 1-20.`
  remainingDisplay.textContent = remainingGuess;
})
'use strict';

const player0El = document.querySelector (".player--0");
const player1El = document.querySelector (".player--1");

const score0El = document.getElementById ("score--0");
const score1El = document.getElementById ("score--1");
const diceEl = document.querySelector(".dice");

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//btn
const btnRoll = document.querySelector (".btn--roll");
const btnHold = document.querySelector (".btn--hold");
const btnNew = document.querySelector (".btn--new");

let scores, currentScore, activePlayer, playGame;

//initializing fun
const inti = function (){
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

 scores = [0, 0];
 activePlayer = 0;
 currentScore = 0;
 playGame = true;

 current0El.textContent = 0;
 current1El.textContent = 0;

 diceEl.classList.add('hidden');
 player0El.classList.remove('player--winner');
 player1El.classList.remove('player--winner');
 player0El.classList.add('player--active');
 player1El.classList.remove('player--active');
}

inti();

// switch player
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
        }



    btnRoll.addEventListener("click", function() {
    if (playGame) {
        diceEl.classList.remove("hidden");
    
        //1.generate the random number
        const dice = Math.floor(Math.random()*6) + 1;
       
    
        //2.display random image
        diceEl.src = `./images/dice-${dice}.png`;
        
        
        //3. check for rolled 1
        if(dice !==1){
        //display the score
        currentScore += dice;
        //current0El.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
        }else{
        // switch the player
        switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if(playGame){
        scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //select winner
    if(scores[activePlayer] >=100){
        playGame = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('.player--winner')
      .classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.add("player--active")
      diceEl.classList.add("hidden");

    }else{
        //switch to next player
        switchPlayer();
    }
    }
}); 


btnNew.addEventListener('click', function () {
    // console.log('clicked')

    location.reload()
})
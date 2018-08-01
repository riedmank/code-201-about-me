'use strict';

var myElement = document.getElementById('myButton');
// var myElement1 = document.getElementById('facts');

myElement.addEventListener('click', function() {
  // myElement1.style.background-color='darkgreen';
  
  //instance variables
  var check = false;
  var answer = [7];
  var userAnswer;
  var guess;
  var secretNumber = Math.floor(Math.random() * 10) + 1;
  var places = ['washington', 'north Dakota', 'california', 'florida'];
  
  // //about me quiz
  // for (var i = 0; i < 5; i++) {
  //   while (check === false) {
  //     userAnswer = prompt('Answer for question ' + (i + 1) + '?').toLowerCase();
  //     if (userAnswer === 'yes' || userAnswer === 'y' || userAnswer === 'no' || userAnswer === 'n') {
  //       answer.push(userAnswer);
  //       console.log('User answer for question ' + (i + 1) + ': ' + userAnswer);
  //       check = true;
  //     } else {
  //       alert('Please enter one of the following: yes, y, no, n.');
  //     }
  //   }
  //   check = false;
  // }

  // //guessing game
  // alert('Try to guess my favorite number between 1 and 10 in 4 guesses or less!');
  // for (var j = 4; j > 0; j--) {
  //   console.log(secretNumber);
  //   guess = prompt('What is your guess? ' + j + ' guesses remaining.');
  //   guess = parseInt(guess); 
  //   if (isNaN(guess) || guess < 1 || guess > 10) {
  //     alert('You didn\'t enter a correct value. Try again.');
  //     j++;
  //   } else if (guess < secretNumber ){
  //     alert('Your guess was too low.');
  //   } else if (guess > secretNumber ) {
  //     alert('Your guess was too high.');
  //   } else if (guess === secretNumber) {
  //     alert('You are correct! You had ' + j + ' guesses remaining.');
  //     break;
  //   } else {
  //     alert('Try again.');
  //   }
  // }
  // if (j === 0) {
  //   alert('You failed to guess my favorite number. It was ' + secretNumber);
  // }

  //State guessing game
  check = false;
  alert('Try to guess a State I have visited.');
  for (var k = 6; k > 0; k--) {
    userAnswer = prompt('What is your guess? You have ' + k + ' guesses remaining.').toLowerCase();
    for (var l = 0; l < places.length; l++) {
      if (userAnswer === places[l])
      {
        check = true;
      }
    }
    if (check) {
      alert('You have correctly guessed a State where I have visited!');
      break;
    } else {
      alert('You were incorrect. Try again.');
    }
  }
  if (k === 0) {
    alert('You failed to guess a State where I visited.');
  }
});
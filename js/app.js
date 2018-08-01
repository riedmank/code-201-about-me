'use strict';

var myElement = document.getElementById('myButton');
var myElement1 = document.getElementById('myFacts');

myElement.addEventListener('click', function() {
  myElement1.style.display='none';

  //instance variables
  var check = false;
  var response = [];
  var answer = ['y', 'n', 'n', 'y', 'n'];
  var userAnswer;
  var guess;
  var secretNumber = Math.floor(Math.random() * 10) + 1;
  var places = ['washington', 'north dakota', 'california', 'florida'];
  var correctAnswer = 0;

  //about me quiz

  for (var i = 0; i < 5; i++) {
    while (check === false) {
      userAnswer = prompt('Answer for question ' + (i + 1) + '?').toLowerCase();
      if (userAnswer === 'yes' || userAnswer === 'y' || userAnswer === 'no' || userAnswer === 'n') {
        console.log('User answer for question ' + (i + 1) + ': ' + userAnswer);
        check = true;
      } else {
        alert('Please enter one of the following: yes, y, no, n.');
      }
    }
    //pushing user responses to array
    if (userAnswer === 'yes' || userAnswer === 'y') {
      userAnswer = 'y';
      response.push(userAnswer);
    }
    if (userAnswer === 'no' || userAnswer === 'n') {
      userAnswer = 'n';
      response.push(userAnswer);
    }
    check = false;
  }

  //adding up correct answers
  for (var m = 0; m < 5; m++) {
    if (response[m] === answer[m]) {
      correctAnswer++;
    }
  }

  //number guessing game
  alert('Try to guess my favorite number between 1 and 10 in 4 guesses or less!');
  for (var j = 4; j > 0; j--) {
    console.log(secretNumber);
    guess = prompt('What is your guess? ' + j + ' guesses remaining.');
    guess = parseInt(guess);
    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert('You didn\'t enter a correct value. Try again.');
      j++;
    } else if (guess < secretNumber ){
      alert('Your guess was too low.');
      console.log('User guess: ' + guess);
    } else if (guess > secretNumber ) {
      alert('Your guess was too high.');
      console.log('User guess ' + guess);
    } else if (guess === secretNumber) {
      console.log('User guess: ' + guess);
      alert('You are correct! You had ' + j + ' guesses remaining.');
      correctAnswer++;
      break;
    } else {
      alert('Try again.');
    }
  }
  if (j === 0) {
    alert('You failed to guess my favorite number. It was ' + secretNumber);
  }

  //State guessing game
  check = false;
  alert('Try to guess a State I have visited.');
  for (var k = 6; k > 0; k--) {
    userAnswer = prompt('What is your guess? You have ' + k + ' guesses remaining.').toLowerCase();
    console.log('User guess: ' + userAnswer);
    for (var l = 0; l < places.length; l++) {
      if (userAnswer === places[l])
      {
        check = true;
      }
    }
    if (check) {
      alert('You have correctly guessed a State where I have visited!');
      correctAnswer++;
      break;
    } else {
      alert('You were incorrect. Try again.');
    }
  }
  if (k === 0) {
    alert('You failed to guess a State where I visited.');
  }

  //switch for correct answers
  switch (correctAnswer) {
  case 0:
    alert('You didn\'t get any correct! Time to study');
    break;
  case 1:
    alert('You only got one correct. Shameful.');
    break;
  case 2:
    alert('Two correct is marginal.');
    break;
  case 3:
    alert('Three correct is only half right.');
    break;
  case 4:
    alert('You got over half right: 4 correct. Not bad but not great.');
    break;
  case 5:
    alert('You got a C average: 5 out of 7.');
    break;
  case 6:
    alert('You only missed one question!');
    break;
  case 7:
    alert('You got them all correct! Congratulations!');
    break;
  }
  myElement1.style.display='block';
});
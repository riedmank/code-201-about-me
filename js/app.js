'use strict';

//setup for event listener
var myElement = document.getElementById('myButton');

myElement.addEventListener('click', function() {
  //instance variables
  var userAnswer;
  var correctAnswer = 0;

  //about me quiz
  function guessAboutMe() {
    var check = false;
    var response = [];
    var answer = ['y', 'n', 'n', 'y', 'n'];
    for (var i = 0; i < 5; i++) {
      while (check === false) {
        userAnswer = prompt(
          'Answer for question ' + (i + 1) + '?'
        ).toLowerCase();
        if (
          userAnswer === 'yes' ||
          userAnswer === 'y' ||
          userAnswer === 'no' ||
          userAnswer === 'n'
        ) {
          console.log(
            'User answer for question ' + (i + 1) + ': ' + userAnswer
          );
          check = true;
        } else {
          alert('Please enter one of the following: yes, y, no, n.');
        }
      }
      response.push(userAnswer.slice(0, 1));
      check = false;
    }

    //adding up correct answers from about me quiz
    for (var m = 0; m < 5; m++) {
      if (response[m] === answer[m]) {
        correctAnswer++;
      }
    }
  }
  //number guessing game
  function guessNumber() {
    var guess;
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    alert(
      'Try to guess my favorite number between 1 and 10 in 4 guesses or less!'
    );
    for (var j = 4; j > 0; j--) {
      console.log(secretNumber);
      guess = parseInt(
        prompt('What is your guess? ' + j + ' guesses remaining.')
      );
      if (isNaN(guess) || guess < 1 || guess > 10) {
        alert('You didn\'t enter a correct value. Try again.');
        j++;
      } else if (guess < secretNumber) {
        alert('Your guess was too low.');
        console.log('User guess: ' + guess);
      } else if (guess > secretNumber) {
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
  }
  //State guessing game
  function guessState() {
    var places = ['washington', 'north dakota', 'california', 'florida'];
    alert('Try to guess a State I have visited.');
    for (var k = 6; k > 0; k--) {
      userAnswer = prompt(
        'What is your guess? You have ' + k + ' guesses remaining.'
      ).toLowerCase();
      console.log('User guess: ' + userAnswer);
      if (places.includes(userAnswer)) {
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
  }

  //switch statement for correct answers
  function getResponse() {
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
    console.log('User answered ' + correctAnswer + ' questions correct.');
  }
  guessAboutMe();
  guessNumber();
  guessState();
  getResponse();
});

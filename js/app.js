'use strict';

// var answer1;
// var answer2;
// var answer3;
// var answer4;
// var answer5;

var myElement = document.getElementById('myButton');
var check = false;
var i;
var answer = [5];
var userAnswer;

function checker() {
  while (check === false) {
    userAnswer = prompt('Answer for question ' + (i + 1) + '?').toLowerCase();
    if (userAnswer === 'yes' || userAnswer === 'y' || userAnswer === 'no' || userAnswer === 'n') {
      answer.push(userAnswer);
      console.log('User answer for question ' + (i + 1) + ': ' + userAnswer);
    } else {
      alert('Please enter one of the following: yes, y, no, n.');
      continue;
    }
    check = true;
  }
}

function solution() {
  alert('Solutions:\nQuestion 1: yes \nQuestion 2: no\nQuestion 3: no\nQuestion 4: yes\nQuestion 5: no');
}

myElement.addEventListener('click', function() {
  //js to change first article needed!!
  for (i = 0; i < 5; i++) {
    checker();
    check = false;
  }
  solution();
  // while (check === false) {
  //   answer1 = prompt('Was Kris born in North Dakota?').toLowerCase();
  //   if (answer1 === 'yes' || answer1 === 'y' || answer1 === 'no' || answer1 === 'n') {
  //     console.log('User answer for question 1: ' + answer1);
  //     if (answer1 === 'yes' || answer1 === 'y')
  //     {
  //       alert('You are correct');
  //     } else {
  //       alert('Wrong');
  //     }
  //   } else {
  //     alert('Please enter one of the following: yes, y, no, n.');
  //     continue;
  //   }
  //   check = true;
  // }
  // check = false;
  // while (check === false) {
  //   answer2 = prompt('Kris\' hometown is Yakima, ND?').toLowerCase();
  //   if (answer2 === 'yes' || answer2 === 'y' || answer2 === 'no' || answer2 === 'n') {
  //     console.log('User answer for question 2: ' + answer2);
  //     if (answer2 === 'no' || answer2 === 'n')
  //     {
  //       alert('You are correct');
  //     } else {
  //       alert('Wrong');
  //     }
  //   } else {
  //     alert('Please enter one of the following: yes, y, no, n.');
  //     continue;
  //   }
  //   check = true;
  // }
  // check = false;
  // while (check === false) {
  //   answer3 = prompt('Kris played the trombone in highschool?').toLowerCase();
  //   if (answer3 === 'yes' || answer3 === 'y' || answer3 === 'no' || answer3 === 'n') {
  //     console.log('User answer for question 3: ' + answer3);
  //     if (answer3 === 'no' || answer3 === 'n')
  //     {
  //       alert('You are correct');
  //     } else {
  //       alert('Wrong');
  //     }
  //   } else {
  //     alert('Please enter one of the following: yes, y, no, n.');
  //     continue;
  //   }
  //   check = true;
  // }
  // check = false;
  // while(check === false) {
  //   answer4 = prompt('Was Kris in the Air Force stationed in Minot, ND?').toLowerCase();
  //   if (answer4 === 'yes' || answer4 === 'y' || answer4 === 'no' || answer4 === 'n') {
  //     console.log('User answer for question 4: ' + answer4);
  //     if (answer4 === 'yes' || answer4 === 'y')
  //     {
  //       alert('You are correct');
  //     } else {
  //       alert('Wrong');
  //     }
  //   } else {
  //     alert('Please enter one of the following: yes, y, no, n.');
  //     continue;
  //   }
  //   check = true;
  // }
  // check = false;
  // while(check === false) {
  //   answer5 = prompt('Does Kris have a pet dog named Max?').toLowerCase();
  //   if (answer5 === 'yes' || answer5 === 'y' || answer5 === 'no' || answer5 === 'n') {
  //     console.log('User answer for question 5: ' + answer5);
  //     if (answer5 === 'no' || answer5 === 'n')
  //     {
  //       alert('You are correct');
  //     } else {
  //       alert('Wrong');
  //     }
  //   } else {
  //     alert('Please enter one of the following: yes, y, no, n.');
  //     continue;
  //   }
  //   check = true;
  // }
  // check = false;
});
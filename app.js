'use strict';

var user = prompt('Hello! Before we start getting to know each other, what\'s your name?');
console.log('users name', user);

alert('Thank you ' + user + ', now a little bit about me!');

//question 1
function countTries(){
  var questionNum = [q1(), q2(), q3(), q4(), q5(), q6(), q7()];
  function q1() {
    var major = prompt('When I started college, I was working towards a Bio Engineering degree. (T/F)');
    console.log('early major', major);

    if (major.toLowerCase() === 'F') {
      alert('You are correct! But I didn\'t like biology.');
      correct++;
    } else {
      alert('I know! It\'s a little hard to see that I would try something that ambitious!');
    };
  }
  q1();

  alert('Nice! A few more to go!');

  //question 2
  function q2() {
    var country = prompt('My favorite country is Peru. (T/F)');
    console.log(country);

    if (country.toLowerCase() === 'F') {
      alert('You\'re right! It\'s on the top of my list though.');
      correct++;
    } else {
      alert('Sorry! But it was false. I want to go very soon!');
    }
  }
  q2();

  //question 3
  function q3() {
    var tea = prompt('I once bought the most expensive tea in the world, for $2100. (T/F)');
    console.log(tea);

    if (tea.toLowerCase() === 'T') {
      alert('You are totally right. I bought tea tea from Starbucks and spilled it on my newer Apple MacBook Pro!');
      correct++;
    } else {
      alert('Wrong! I don\'t recommend that you buy this tea though.');
    }
  }
  q3();

  //question 4
  function q4() {
    var brazil = prompt('I lived in Brazil for a month and a half during the world cup in Rio. (T/F)');
    console.log(brazil);

    if (brazil.toLowerCase() === 'T') {
      alert('Yes! It was the most magical experience of my existence.');
      correct++;
    } else {
      alert('It does sound a little crazy huh? But it actually did happen.');
    }

    alert('Just one more question left. Let\'s see if you can get this one right');
  }
  q4();

  //question 5
  function q5() {
    var family = prompt('I have a family of 21 brothers and sisters. (T/F)');
    console.log(family);

    if (family.toLowerCase() === 'T') {
      alert('You\'re definitely right! Dad has 11 kids, mom has 6, and I grew up with 4 that I call brothers and sisters.');
      correct++;
    } else {
      alert('If only I were that lucky. But we\'re a very loving and supportive family though');
    }
  }
  q5();

  alert('Thanks for playing ' + user + '. Let\'s recap: You guessed ' + major + ' for my major question, ' + country + '  for travel to Peru, ' + tea + ' for the most expensive tea in the world, ' + brazil + ' for travel to Brazil, and ' + family + ' for the size of my family. Whether you answered all correct or wrong, you\'ve tried to get to know me. And I appreciate it.');

  alert('Just two more questions!');

  //question 6
  function q6() {
    var number;
    var counter = 0;
    console.log('states lived in', number);

    while (number !== 6) {
      number = parseInt(prompt('How many states have I lived in?'));

      if (number === 6) {
        alert('You\'re right! NY, WA, MO, OK, MN, and VA!');
        correct++;
        break;
      } else if(number < 6) {
        alert('Been to more places than that!');
        counter++;
      } else if(number > 6) {
        alert('Haven\'t been to quite that many places!');
        counter++;
        console.log('what is value of counter', counter);
      } else if(isNan(state) || number === null) {
        alert('Please enter a number!');
        counter++;
      }
      if (counter === 4) {
        alert('Sorry! All choices have been used up.');
        break;
      }
    }
  };
  q6();

//question 7
  function q7() {
    var hobbies = ['snowboarding', 'basketball', 'soccer', 'hiking', 'coding'];
    var answer = prompt('What do you think my favorite hobbies are?');

    for (var i = 0; i < 5; i++) {
      console.log('guess at each iteration', answer);

      if (answer === hobbies[0] || answer === hobbies[1] || answer === hobbies[2] || answer === hobbies[3] || answer === hobbies[4]) {
        alert('You\'re totally right. My hobbies are: ' + hobbies);
        flag = true;
        break;
        correct++,
      } else {
        alert('Wrong! Keep trying!');
        answer = prompt('What do you tihnk my favorite hobbies are?');
      }

    }
    if(!flag) {
      alert('Sorry, but you\'re wrong!!');
  }
}
}
countTries();

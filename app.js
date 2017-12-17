'use strict';

var user = prompt('Hello! Before we start getting to know each other, what\'s your name?');
console.log('users name', user);

alert('Thank you ' + user + ', now a little bit about me!');

var major = prompt('When I started college, I was working towards a Bio Engineering degree. (true/false)');
console.log('early major', major);

if (major === 't') {
  alert('You are correct! But I didn\'t like biology.');
} else {
  alert('I know! It\'s a little hard to see that I would try something that ambitious!');
};

alert('Nice! A few more to go!');

var country = prompt('My favorite country is Peru. (True/False)');
console.log(country);

if (country === 'f') {
  alert('You\'re right! It\'s on the top of my list though.');
} else {
  alert('Sorry! But it was false. I want to go very soon!');
}

var tea = prompt('I once bought the most expensive tea in the world, for $2100. (True/False)');
console.log(tea);

if (tea === 't') {
  alert('You are totally right. I bought tea tea from Starbucks and spilled it on my newer Apple MacBook Pro!');
} else {
  alert('Wrong! I don\'t recommend that you buy this tea though.');
}

var brazil = prompt('I lived in Brazil for a month and a half during the world cup in Rio. (True/False)');
console.log(brazil);

if (brazil === 't') {
  alert('Yes! It was the most magical experience of my existence.');
} else {
  alert('It does sound a little crazy huh? But it actually did happen.');
}

alert('Just one more question left. Let\'s see if you can get this one right');

var family = prompt('I have a family of 21 brothers and sisters. (True/False)');
console.log(family);

if (family === 't') {
  alert('You\'re definitely right! Dad has 11 kids, mom has 6, and I grew up with 4 that I call brothers and sisters.');
} else {
  alert('If only I were that lucky. But we\'re a very loving and supportive family though');
}

alert('Thanks for playing ' + user + '. Let\'s recap: You guessed ' + major + ' for my major question, ' + country + '  for travel to Peru, ' + tea + ' for the most expensive tea in the world, ' + brazil + ' for travel to Brazil, and ' + family + ' for the size of my family. Whether you answered all correct or wrong, you\'ve tried to get to know me. And I appreciate it.');

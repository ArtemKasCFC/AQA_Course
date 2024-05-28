'use strict';

const minAge = 18;
const maxAge = 60;

function getAccess(age) {
  age = +age;
  if (typeof age !== 'number' || !age) return console.error('Age must be a number');

  const message =
    age < minAge
      ? 'Grow up'
      : age > maxAge
      ? 'Get rest'
      : age >= minAge && age <= maxAge
      ? 'Welcome'
      : 'Technical work';

  switch (message) {
    case 'Grow up':
      console.log(`You don't have access cause your age is ${age} and it's less than ${minAge}`);
      break;
    case 'Get rest':
      console.log('Keep calm and watch Culture channel');
      break;
    case 'Welcome':
      console.log(`Welcome!`);
      break;
    case 'Technical work':
      console.log('Technical work');
  }
}

getAccess(10);
getAccess(17);
getAccess(18);
getAccess(19);
getAccess(59);
getAccess(60);
getAccess(61);

getAccess('2');
getAccess('aaa');

'use strict';

const minAge = 18;
const maxAge = 60;

function getAccess(age) {
  if (age < minAge) console.log(`You don't have access cause your age is ${age} and it's less than ${minAge}`);
  else if (age > maxAge) console.log('Keep calm and watch Culture channel');
  else if (age >= minAge && age <= maxAge) console.log('Welcome!');
  else console.log('Technical work');
}

getAccess(10);
getAccess(17);
getAccess(18);
getAccess(19);
getAccess(59);
getAccess(60);
getAccess(61);

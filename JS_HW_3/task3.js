// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом),
//   и выводить в консоль количество гласных и согласных букв в этом слове.
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const word = 'P@$$word';
let vowels = 0;
let consonants = 0;
for (let i of word) {
  if (i.match(/[^a-zA-Z]+/)) console.log(`${i} is not a letter :(`);
  else if (i.match(/[aeiou]+/i)) ++vowels;
  else consonants++;
}
console.log(`Word ${word} contains ${vowels} vowels and ${consonants} consonants`);

// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом)
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон.
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';

const modifyWord = (str, offset) => {
  let newString = '';
  for (let i of str) {
    const currentCharCode = i.charCodeAt();
    let newCharCode;
    if (currentCharCode === 97 && offset < 0) newCharCode = String.fromCharCode(122);
    else if (currentCharCode === 65 && offset < 0) newCharCode = String.fromCharCode(90);
    else if (currentCharCode === 122 && offset > 0) newCharCode = String.fromCharCode(97);
    else if (currentCharCode === 90 && offset > 0) newCharCode = String.fromCharCode(65);
    else {
      newCharCode = String.fromCharCode(currentCharCode + offset);
    }
    newString = newString + newCharCode;
  }
  console.log(newString);
};

modifyWord('AbC', -1);
modifyWord('ZzZ', 1);

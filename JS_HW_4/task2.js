// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив)
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const filterPizza = pizzaNames => {
  const filteredNames = pizzaNames.filter(
    name =>
      !competitorPizzas.map(competitorPizza => competitorPizza.toLocaleLowerCase()).includes(name.toLocaleLowerCase())
  );
  return filteredNames.length === 0 ? null : filteredNames;
};

console.log(filterPizza(['BBQ Chicken', 'Caprichosa', 'Diablo', '4 cheeses', 'Neapolitan']));
console.log(filterPizza(['Caprichosa', 'Diablo', '4 cheeses']));
console.log(filterPizza(['diablo', '4 Cheeses', 'Hawai', 'French']));

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв.
//   Если таких слов несколько - выводит их все.

const showLargestWord = sentence => {
  const longestWordlength = sentence.split(' ').sort((a, b) => b.length - a.length)[0].length;

  const longestWords = sentence
    .split(' ')
    .filter(word => !/[.,]+/.test(word))
    .filter(word => word.length === longestWordlength);

  const result = longestWords.join(', ');

  return result;
};

console.log(
  showLargestWord(
    `The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. 
  Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, 
  for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great 
  vengeance and furious anger those who attempt to poison and destroy My brothers. And you will know I am the Lord when I lay My vengeance upon you.`
  )
);

console.log(
  showLargestWord(
    `And I will strike down upon thee with great 
  vengeance and furious anger those who attempt to poison and destroy My brothers. And you will know I am the Lord when I lay My vengeance upon you.`
  )
);

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

const createUniqueNumbers = array =>
  array.reduce((acc, cur) => {
    if (array.indexOf(cur) === array.lastIndexOf(cur) || !acc.includes(cur)) acc.push(cur);
    return acc;
  }, []);

console.log(createUniqueNumbers([9, 9, 14, 12, 9]));

// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

const checkPalindrom = word =>
  word.split('').every((letter, ind, array) => letter.toLowerCase() === array[array.length - 1 - ind].toLowerCase());

console.log(checkPalindrom('kek'));
console.log(checkPalindrom('anna'));
console.log(checkPalindrom('Anna'));
console.log(checkPalindrom('krek'));
console.log(checkPalindrom('artem'));

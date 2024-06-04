// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры.
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9.
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

function sumDigits(number) {
  const digits = ('' + number).split('');
  const sum = digits.reduce((acc, cur) => acc + +cur, 0);

  if (sum <= 9) return sum;

  return sumDigits(sum);
}

console.log(sumDigits(19));
console.log(sumDigits(98765));

// 6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите,
//     и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d

const indexUpperZ = 90,
  indexLowerZ = 122,
  indexUpperA = 65,
  indexLowerA = 97;

function changeDoubleLetters(string) {
  const letters = string.split('');
  const resultArray = [];
  for (let i = 0; i < letters.length; ++i) {
    if (letters[i] === letters[i - 1]) {
      resultArray.push(
        String.fromCharCode(
          letters[i].charCodeAt() === indexLowerZ
            ? indexLowerA
            : letters[i].charCodeAt() === indexUpperZ
            ? indexUpperZ
            : letters[i].charCodeAt() + 1
        )
      );
    } else if (letters[i] === letters[i + 1]) {
      continue;
    } else {
      resultArray.push(letters[i]);
    }
  }

  const result = resultArray.join('');

  if (resultArray.some((letter, ind, arr) => letter === arr[ind + 1])) return changeDoubleLetters(result);

  return result;
}

console.log(changeDoubleLetters('aabc'));
console.log(changeDoubleLetters('abczz'));
console.log(changeDoubleLetters('ZZbc'));

'use strict';

// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb

//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)
const size = 1024;

const convertBytes = bytes =>
  console.log(
    `${bytes} bytes = ${(bytes / Math.pow(size, 1)).toFixed(1)} kB, ${(bytes / Math.pow(size, 2)).toFixed(1)} Mb, ${(
      bytes / Math.pow(size, 3)
    ).toFixed(1)} Gb, ${(bytes / Math.pow(size, 4)).toFixed(1)} Tb`
  );

convertBytes(16565846);

// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб

const shapes = `
    
    *
   ***
  *****
 *******
 
    *
   ***
  *****
   ***
    *
 `;
console.log(shapes);

// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

for (let i = 1; i <= 100; i++) {
  if (!(i % 3) && !(i % 5)) console.log(`Число ${i} - делится и на 3 на 5`);
  else if (!(i % 3)) console.log(`Число ${i} - делится на 3`);
  else if (!(i % 5)) console.log(`Число ${i} - делится на 5`);
}

// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре,
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

const modifyToCamelCase = sentence =>
  console.log(
    sentence
      .split(' ')
      .map((word, ind) => (ind === 0 ? word.toLowerCase() : word.at(0).toUpperCase() + word.slice(1).toLowerCase()))
      .join('')
  );

modifyToCamelCase('I am super engineer');

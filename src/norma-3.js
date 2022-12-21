console.log("**********Norma-3***********");
/* Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем. */

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let i = 2;

let number = +prompt("Hi! Enter number, please", 0);

console.log(typeof number);
console.log(number);

if (number >= 0) {
  a++;
} else if (number < 0) {
  b++;
} else if (number === 0) {
  c++;
}
if (number % 2 === 0) {
  d++;
}
if (number % 2 !== 0) {
  e++;
}

i++;
console.log(i);

if (i === 3) {
  i = 0;
  console.log(`Positive number(s): ${a}`);
  console.log(`Negative number(s): ${b}`);
  console.log(`Zero number(s): ${c}`);
  console.log(`Even number(s): ${d}`);
  console.log(`Odd number(s): ${e}`);
}

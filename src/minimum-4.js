console.log("**********Minimum-4***********");
/* Запитай у користувача 2 числа і знайди найбільший спільний дільник. */
let a = +prompt("Hi! Enter first number", 10);
let b = +prompt("Hi! Enter second number", 5);
let t = 0;

if (a === 0) console.log(b);
while (b != 0) {
  if (a > b) {
    t = a % b;
  } else {
    t = b % a;
  }
  a = b;
  b = t;
}
console.log(a);
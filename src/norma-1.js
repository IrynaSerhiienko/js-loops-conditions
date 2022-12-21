console.log("**********Norma-1***********");
/* Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом. */
let str = prompt("Hi, Enter a five-digit number, pl", 10001);

let reverseString = " ";
for (let i = str.length - 1; i >= 0; i--) {
  reverseString += str[i];
}
if (+reverseString === +str) {
  console.log(`${str} - this is a palindrome!`);
  alert(`${str} - this is a palindrome!`);
} else {
  console.log("Error. This is not a palindrome!");
  alert("Error. This is not a palindrome!");
}

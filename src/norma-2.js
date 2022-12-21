console.log("**********Norma-2***********");
/* Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
1. від 200 до 300 - знижка буде 3%; 
2. від 300 до 500 - 5%;
3. від 500 і вище - 7%. */

let sum = prompt("Hi, Enter purchase amount, ₴, pl", 300);
let discountedPrice;

if (sum >= 200 && sum < 300) {
  discountedPrice = sum - (sum * 3) / 100;
  console.log(`The amount to be paid with a discount: ${discountedPrice}`);
  alert(`The amount to be paid with a discount: ${discountedPrice}`);
} else if (sum >= 300 && sum < 500) {
  discountedPrice = sum - (sum * 5) / 100;
  console.log(`The amount to be paid with a discount: ${discountedPrice}`);
  alert(`The amount to be paid with a discount: ${discountedPrice}`);
} else if (sum >= 500) {
  discountedPrice = sum - (sum * 7) / 100;
  console.log(`The amount to be paid with a discount: ${discountedPrice}`);
  alert(`The amount to be paid with a discount: ${discountedPrice}`);
}


console.log("**********Minimum-1***********");
/* Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних. */

let age = +prompt("Hi! How old are you?", 18);
if (age >= 0 && age < 12) {
  alert("You are a child");
} else if (age === 12 && age < 18) {
  alert("You are a teenager");
} else if (age === 18 && age < 60) {
  alert("You are an adult");
} else if (age >= 60) {
  alert("You are retired");
} else {
  alert("Error!");
}
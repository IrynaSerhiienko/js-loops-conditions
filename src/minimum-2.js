console.log("**********Minimum-2***********");
/* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д). */

let number = +prompt("Hi, Enter number from 0 to 9", 2);
switch (number) {
  case 0:
    alert("The special character of this key is: )");
    break;
  case 1:
    alert("The special character of this key is: !");
    break;
  case 2:
    alert("The special character of this key is: @");
    break;
  case 3:
    alert("The special character of this key is: #");
    break;
  case 4:
    alert("The special character of this key is: $");
    break;
  case 5:
    alert("The special character of this key is: %");
    break;
  case 6:
    alert("The special character of this key is: ^");
    break;
  case 7:
    alert("The special character of this key is: &");
    break;
  case 8:
    alert("The special character of this key is: *");
    break;
  case 9:
    alert("The special character of this key is: (");
    break;
  default:
    alert("Error!");
}

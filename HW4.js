/* Задание 1
let a = prompt(`Введите первое число`);
let b = prompt(`Введите второе число`);

function min(a, b) {
    return a <= b ? a : b;
}

console.log(min(a, b));
*/

/* Задание 2
const number = prompt(`Введите число`);

function num(number) {
    if (number % 2 == 0) {
        num = (`Число четное`);
    } else {
        num = (`Число нечетное`);
    }
    return num;
}

console.log(num(number));
*/

/* Задание 3.1
function square(num) {
    square = num * num;
}

square(4);
console.log(square);
*/

/* Задание 3.2
function square(num) {
    return num * num;
}

let num = 4;
console.log(square(num));
*/

/* Задание 4
greeting()

function greeting() {
    let age = Number(prompt(`Сколько вам лет?`));
    if (age < 0) {
        console.log(`Вы ввели неправильное значение`);
    } else if (age >= 0 && age <= 12) {
        console.log(`Привет, друг!`);
    } else {
        console.log(`Добро пожаловать!`);
    }
}
*/


/* Задание 5
let a = prompt("Введите число");
let b = prompt("Введите число");

function checkNumber(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return a * b;
    }
}

console.log(checkNumber(a, b));
*/

/* Задание 6
function checkNumber() {
    let input = prompt("Введите число");
    if (isNaN(input)) {
      return 'Вы ввели неправильное значение'
    } else {
      return input *3;
   }
}

console.log(checkNumber());
*/

/* Задание 7
function getRectangleArea() {
    return Math.PI * this.radius * this.radius;
}

function getRectanglePerimeter() {
    return 2 * Math.PI * this.radius;
}


const circle1 = {
    radius: 4,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};


const circle2 = {
    radius: 6,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
*/

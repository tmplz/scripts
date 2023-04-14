/* Задание 1
let str = "js";

let newStr = str.toUpperCase();
console.log(newStr);
*/

/* Задание 2
function searchStart(str, start) {
    str.forEach((result) => {
        if (result.toLowerCase().startsWith(start.toLowerCase())) {
            console.log(result);
        }
    });
};

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
*/

/* Задание 3
let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
*/

/* Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));
*/

/* Задание 5
function getRandom(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

console.log(getRandom(1, 10));
*/

/* Задание 6
function getRandomNum(maxValue) {
    let getRandom = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++) {
        getRandom[i] = Math.round(Math.random() * maxValue);
    }
    return getRandom;
}
console.log(getRandomNum(4));
*/

/* Задание 7
function getRandom(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandom(5, 10));
*/

/* Задание 8
let currentDate = new Date();
console.log(currentDate);
*/

/* Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);
*/

/* Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let date = new Date();

function currentDate(date) {
    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + ", " + days[date.getDay()];
}
console.log(currentDate(date));
*/







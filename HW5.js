/* Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let el = 0; el < arr.length; el++) {
    if (arr[el] == 10) break;
    console.log(arr[el]);
}
*/

/* Задание 2
const arr = [1, 5, 4, 10, 0, 3];

for (let el = 0; el < arr.length; el++) {
    if (arr[el] == 4) {
        console.log(el);
        break;
    }
}
*/

/* Задание 3
const arr = [1, 3, 5, 10, 20];

console.log(arr.join(' '));
*/

/* Задание 4
const arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
]

for (let arrIn of arr) {
    for (let el of arrIn) {
        console.log(el);
    }
}
*/

/* Задание 5
const arr = [1, 1, 1];

arr.push(2, 2, 2);
console.log(arr);
*/

/* Задание 6
const arr = [9, 8, 7, 'a', 6, 5];

console.log(arr.sort());
console.log(arr.pop());
console.log(arr);
*/

/* Задание 7
let arr = [9, 8, 7, 6, 5];

let search = arr.includes(Number(prompt('Введите число')));
console.log(search);
*/

/* Задание 8
let str  = 'abcdef';

str = str.split("");
console.log(str);
str = str.reverse();
console.log(str);
str = str.join('');
console.log(str);
*/

/*Задание 9
const a = [1, 2, 3,];
const b = [4, 5, 6];

const c = a.concat(b);
console.log(c);
*/

/* Задание 10
const arr = [1, 3, 7, 3, 5];

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);  
}
*/


/* Задание 11
function square(arr) {
    const result = arr.map(item => (item * item));
    console.log(result);
}
square([2, 6, 4, 3]);
*/

/* Задание 12
function lengthWords(words) {
    const result = words.map(str => str.length);
    console.log(result);
}

lengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
*/

/* Задание 13
function numbs(negative) {
    const result = negative.filter(el => el < 0);
    console.log(result);
}

numbs([2, 5, -1, 5, -6, -3]);
*/








/* Задание 1
function mult(arr) {
	result = arr[0] * arr[1] * arr[2] * arr[3];
	console.log(result);
}

function sum(arr) {  
	result = arr[0] + arr[1] + arr[2] + arr[3];  
	console.log(result); 
}

function getResult(callback, arr) {  
	callback(arr);  
}  
  
arr = [2, 5, 4, 1];
getResult(mult, arr);
getResult(sum, arr);
*/
    
/* Задание 2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));
*/

/* Задание 3
function reversArr(arr) {
	result = arr.reverse();
	console.log(result);
}

function toNumberArr(arr) {
	arr = arr.map(Number);
	arr = arr.filter(item => !isNaN(item));
	console.log(arr);
}

function getResult(callback, arr) {
	callback(arr)
}

const arr = [1, '4', false, 9, 'two'];
getResult(reversArr, arr);
getResult(toNumberArr, arr);
*/

/* Задание 4
const timerDate = (date) => {
	const idInterval = setInterval(() => {
		let date = new Date();
		console.log(date);
	}, 3000);

	setTimeout(() => {
		clearInterval(idInterval);
		console.log('30 секунд прошло');
	}, 1000 * date);
};

timerDate(30);
*/

/* Задание 5
function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
    }, 1000);
	callback();

}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
*/





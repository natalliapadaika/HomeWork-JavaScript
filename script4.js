// Задание 5

// Дан массив объектов, например:

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
} ];


for (item of questions){

item.usersAnswer = null;}

// console.log(questions);



// Задание 9

// Существует массив объектов, описывающих пользователей, например:
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.



const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

for (let item of users){
    if(item.age > 15){
console.log(item.name)
}
};

// Задание 10

// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):

// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]

// Вывести этот массив в консоль.

// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

let newVegetables = [];

for(let i= 0; i < vegetables.length; i++)
{
const obj = {};
obj.word = vegetables[i];
obj.length = vegetables[i].length;
newVegetables.push(obj); 

}

console.log(newVegetables);    //много времени ушло на решение, не сразу додумалась поставть const obj = {} - в сам цикл, было перед циклом и значение были топинамбур и 10...... и так 4 объекта....... :))))



// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"


// let newVegetables = [{word:'морковь', length: 7}, {word:'баклажан', length: 8}, {word:'репа', length: 4}, {word:'топинамбур', length: 10}
// ];

for (key of newVegetables){
    console.log(`${key.word} - ${key.length}`)
}

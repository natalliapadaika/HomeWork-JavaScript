// Задание 1

// Написать функцию, которая принимает два параметра и складывает их.

// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.

// Примеры результатов вызова функции:

// sum(2,4); // 6

// sum('d',4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра

let sum = (a, b) => {
    if (a === undefined || b === undefined){
        console.error('введите два параметра');
    } else if (typeof a !== 'number' || typeof b !== 'number'){
        console.error('введенные данные не являются числами');
    } else {
           
           let result = a + b;
           console.log(result);
           return result;
    
        };
    };
    


// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"


// function square(a) {
//   console.log(a * a)
// }

// square(10) // 100

// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// function square(a) {
//   console.log(a * a)
// }



let square = (a) => {
    if (a === undefined){
        console.log('Функция "square" не может быть вызвана без аргумента')
    } else {
        console.log(a * a);
        return;
    };
};

// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.



let getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

let guessTheNumber = (num) => {
    const randomNum = getRandomInteger(0, 10);
    if (num > 0 && num <=10) {
        if ( randomNum === num) {
          return  console.log('Вы выиграли')
        } else {
          return  console.log(`“Вы не угадали, ваше число - ${num},  а выпало число ${randomNum}"`);
        };

    };
};

// guessTheNumber(8);

// Задание 4

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

const arr = [1, 3, 10, -15, 25, 111]

const copyArr = arr.map(item => item);

// Задание 5

// Напишите функцию, которая принимает массив имен и возвращает новый массив, в котором каждое имя будет иметь приставку "Hello, "

const names = ['Mia', 'Alina', 'Fedor', 'Ilay']

const newNames = names.map( item => "Hello, " + item);
console.log(newNames);

// Задание 6

// Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.

const users = [{name:'Mia', age: 25, work: true}, {name:'Alina', age: 51, work: true}, {name:'Fedor', age: 32, work: false}, {name:'Ilay', age: 41, work: true}]

const newUsers = [];

users.forEach(item => newUsers.push(item.name));
console.log(newUsers);

// Задание 7

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

// Проверить работу функции можно на объекте:

const objectWithNumbers = {
    a: 1,
    b: 20,
    c: 'string',
    d: 12,
}


let sumObjectValues = (objectWithNumbers) => {
    let sum = 0;
    Object.values(objectWithNumbers).forEach((item) => {
        if (typeof item === 'number'){
            sum = sum + item;
        };  
    });
         console.log(sum);
         return sum;

};
      

sumObjectValues(objectWithNumbers);

sumObjectValues({f:2, g:6, r:"1"})

// Задание 8
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

let string = 'every season is beautiful, especially autumn';
 

 let ucFirst = (string) => {
 let str = string.substr(0, 1).toUpperCase() + string.slice(1);
 console.log(str);
} 

// ucFirst(string);
 
// ucFirst('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');

// Задание 9

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

let str = 'I like goodWord, but sometimes our word badWord, and i XXX this word';


 let checkSpam = (str) => {

let newstr = str.toLowerCase();
return newstr.includes('badword') || newstr.includes('xxx');

};

// // alert( checkSpam(str) );
// alert (checkSpam('every season is beautiful, especially autumn'));

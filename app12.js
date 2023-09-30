// Задание 1

// Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

const names = ['Hanna', 'Marina', 'Fedor', 'Vladlen', 'Serg', 'Lev']

// Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль.

const [name1, name2] = names;

 console.log(name1, name2);

//  Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль.

 const [nameOne, NameTwo, ...newNames] = names

 newNames.forEach(item => {
    console.log(item);
 });

//  Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

const [nameFirst, nameSecond = 'Alex'] = names
console.log(nameFirst, nameSecond);

// Задание 2

// Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива.

const arrayNames = ['Lidia','Hanna', 'Marina', 'Fedor', 'Vladlen', 'Serg', 'Lev'];

const logParametr = (([parametr1, parametr2, parametr3]) =>{
 console.log(parametr1, parametr2, parametr3);
})
logParametr(arrayNames);

// Задание 3

// Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.


const dogs = {

   breed: 'chihuahua',
   age: 2,
   dogsName: 'mila',
   champion: true

};
 console.log(dogs)

const {breed = 1, dogsName = 2, ...fields} = dogs;
console.log(breed)
console.log(dogsName)
console.log(fields);

// Задание 4

//  1. Создайте функцию "meanScore", которая будет принимать любое количество аргументов, объединять их в один массив и возвращать среднее значение всех аргументов, округленное до 2 знаков после запятой.
// 2. Если хотя бы один элемент в этом массиве не является числом - выводим в консоль следующую ошибку:
// "Все аргументы в вызове функции должны быть числами!"

// ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest", так и оператор "spread".

const meanScore = (...arrayNumber) =>{
   let sum = 0;
   let n = 0;
   arrayNumber.forEach(item => {
if(typeof item != 'number'){
   console.log('Все аргументы в вызове функции должны быть числами!')
     n +=1;
} else {
   sum = sum + item;
} 
   })
   const sred = (sum / (arrayNumber.length - n)).toFixed(2);
   // console.log(sred);
   return;
};

 meanScore(0, 6, 5, 25, '1')

// здесь я применила только оператор 'rest', куда пристроить другой не придумала :))))

//творити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б//

function calc(a, b) {

    let result = a + b;

    return result;

}

let triangle = calc(5,6)
console.log('triangle ' + triangle + ' cm')


//створити функцію яка обчислює та повертає площу кола з радіусом r//

function calc(r, d){

    let result = r * d;

    return result;

}

console.log('------------------')
console.log('------------------')

let r = calc(3,6)
console.log('circle ratio ' + r + ' m')

console.log('------------------')
console.log('------------------')

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r//

function calc(h, r){

    let result = h + r;

    return result;

}



let h1 = calc(11,8)
let h2 = calc(4,14)
console.log('Height ' + h1 + ' cm' + '; Ratio ' + h2 + ' m')


//створити функцію яка приймає масив та виводить кожен його елемент//


let things = [

    {id: 0, name: 'Dan', age: 18, hobby: 'drawing', Favourite_lesson: 'English'},
    {id: 1, name: 'Lee', age: 39, hobby: 'Read books', Favourite_lesson: 'Chemistry'}

]

function thingFilter(things){
    let filteredThings = [];
    for (const thing of things){

        if (thing.age > 20){
            filteredThings.push(thing);
        }

    }
    return filteredThings;
}

let filter = thingFilter(things);
console.log(filter);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент//


function text() {

    console.log(arguments);
    if (arguments.length === 2){
        return arguments[0] + arguments[1];
    }else if (arguments.length === 3){
        return arguments[0] + arguments[1] + arguments[2];

    }

}

document.write(text(`Lorem ipsum dolor sit amet.`, `Lorem ipsum.<br><br>`));
document.write(text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, sapiente.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum.'));


document.write('<h2>-----------------------------</h2>');
document.write('<h2>-----------------------------</h2>');


//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий//


function text2() {

    console.log(arguments);
    if (arguments.length === 2){
        document.write(`<ul><li>`)
        return arguments[0] + arguments[1];


    }else if (arguments.length === 3){
        return arguments[0] + arguments[1] + arguments[2];

    }

}


document.write(text2(`Lorem ipsum dolor sit amet.`, ` <div>Lorem ipsum.<br></div>`));
document.write(text2(`Lorem ipsum dolor sit amet.`, ` <div>Lorem ipsum.<br></div>`));
document.write(text2(`Lorem ipsum dolor sit amet.`, ` <div>Lorem ipsum.<br></div>`));
document.write(text2(`Lorem ipsum dolor sit amet.`, ` <div>Lorem ipsum.<br></div>`));

document.write(`</ul></li>`)
document.write(`</ul></li>`)
document.write(`</ul></li>`)
document.write(`</ul></li>`)

document.write('<h2>-----------------------------</h2>');
document.write('<h2>-----------------------------</h2>');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)//

function text3() {

    console.log(arguments);
    if (arguments.length === 2){

        document.write(`<ul><li>`)

        return arguments[0] + arguments[1];


    }else if (arguments.length === 3){
        if (text3.number === []) {
            document.write(`<li>`)
        }

        return arguments[0] + arguments[1] + arguments[2];

    }

}

document.write(text3(`Lorem ipsum dolor sit amet.`, ` Lorem ipsum.`));
document.write(text3(`Lorem ipsum dolor sit amet.`, ` Lorem ipsum.`));
document.write(text3(`<br>2222`, `23123`, `1239`));
document.write(text3(`Lorem ipsum dolor sit amet.`, ` Lorem ipsum.`));
document.write(text3(`<br>2222`, `23123`, `12232321321`));


document.write(`</ul></li>`)
document.write(`</ul></li>`)
document.write(`</ul></li>`)

document.write('<h2>-----------------------------</h2>');
document.write('<h2>-----------------------------</h2>');

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список//

function printerArray(array) {
    for (const item of array) {
        console.log(item);
    }

}

let things2 = [

    {number: 121, string: h1, Boolean: h2},
    {number: 3211, string: h2, Boolean: h2},
    {number: 121321, string: h1, Boolean: text}

];

printerArray(things2)

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.//

let things3 = [

    {id: 0, name: 'Dani', age: 44},
    {id: 1, name: 'Sahara', age: 24},
    {id: 2, name: 'Ryu', age: 65}

];


document.write(`<div><h2>| Id ${things3[0].id} | Name ${things3[0].name} | Age ${things3[0].age} |</h2></div>`)
document.write(`<div><h2>| Id ${things3[1].id} | Name ${things3[1].name} | Age ${things3[1].age} |</h2></div>`)
document.write(`<div><h2>| Id ${things3[2].id} | Name ${things3[2].name} | Age ${things3[2].age} |</h2></div>`)

document.write('<h2>-----------------------------</h2>');
document.write('<h2>-----------------------------</h2>');

//створити функцію яка повертає найменьше число з масиву//

function numberFilter(numbers) {
     let filteredNumbers = [];
     for (const number of numbers) {


     }
return filteredNumbers;

}

let numbers = [ 1110, 2021, 102, 2031

]

console.log(Math.min(numbers[0], numbers[1], numbers[2], numbers[3]) + ' Min')
document.write(Math.min(numbers[0], numbers[1], numbers[2], numbers[3]) + ' Min')

//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13//


function sum(arr){



    let sum = ([1, 2, 10])
    return sum[0] + sum[1] + sum[2];



}

let number = sum();
console.log(number);



//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]//


function swap(arr,index1,index2){


return [arr, '11, 22, 33, 44']


}

console.log(swap([11, 22, 33, 44], 0 ,1));

//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)//
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250//

function exchange(sumUAH,currencyValues,exchangeCurrency){

    let i = [2];

    let money = [

        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42},
        {currency: 'UAH', value: 100},
        {currency: 'GBR', value: 50}

    ];

    for (const moneyElement of money) {

        console.log(moneyElement.currency)
        console.log(moneyElement.value)




    }


    money.currency = money.value;



    let valueNumber = [i > money]

    //let valueCountryNumber = [money.currency > money.value]

    let exchange = ([100000])
    return (exchange / 595 + money[i].value + ' '  + money[i].currency)


}
let number8 = exchange();
console.log(number8)
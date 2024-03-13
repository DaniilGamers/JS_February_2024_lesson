function calc(a, b) {

    let result = a + b;

    return result;

}

let triangle = calc(5,6)
console.log('triangle ' + triangle + ' cm')


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
function calc(h, r){

    let result = h + r;

    return result;

}



let h1 = calc(11,8)
let h2 = calc(4,14)
console.log('Height ' + h1 + ' cm' + '; Ratio ' + h2 + ' m')

let things = [

    {id: 0, name: 'Dan', age: 18, hobby: 'drawing', Favourite_lesson: 'English'},
    {id: 1, name: 'Lee', age: 39, hobby: 'Read books', Favourite_lesson: 'Chemistry'}

]

function thingFilter(things){
    let filteredThings = [];
    for (const thing of things){

        if (thing.age > 10){
            filteredThings.push(thing);
        }

    }
    return filteredThings;
}

let filter = thingFilter(things);
console.log(filter);


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

let count = 0

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


function sum(arr){



    let sum = ([1, 2, 10])
    return sum[0] + sum[1] + sum[2];



}

let number = sum();
console.log(number);






function swap(arr,index1,index2){

    let swap = ([11,22,33,44, 0, 1]);
    let number_index1 = ([]);
    let number_index2 = ([]);



    [swap[4]] = [number_index1[0]];

        [swap[5]] =  [number_index2[1]];



    return swap





}

let numbers6 = swap();

console.log(numbers6)

let money = [

    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'UAH', value: 100},
    {currency: 'GBR', value: 50}

];

function exchange(sumUAH,currencyValues,exchangeCurrency){

    let exchange = ([100000])
    return exchange / 595 + 40 + 42


}

for (const moneyElement of money) {

    console.log(moneyElement.currency)

}
let number8 = exchange();
console.log(number8 + ' USD')
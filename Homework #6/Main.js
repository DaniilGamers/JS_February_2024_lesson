//Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world'

let str2 = 'lorem ipsum'

let str3 = 'javascript is cool'

console.log('hello world  - ' + str.length + '  lorem ipsum - ' + str2.length + '  javascript is cool - ' + str3.length)

/*
Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'
*/

console.log(str.toUpperCase() + '  ' + str2.toUpperCase() + '  ' + str3.toUpperCase())


/*
Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/

let Str = 'HELLO WORLD'

let Str2 = 'LOREM IPSUM'

let Str3 = 'JAVASCRIPT IS COOL'

console.log(Str.toLowerCase() + '  ' + Str2.toLowerCase() + '  ' + Str3.toLowerCase())

// "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str_dirty = ' dirty string   ';

console.log(str_dirty.replaceAll(' ' || '  ', ''))


//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

function stringToArray(str){

    let str_arr = 'Ревуть воли як ясла повні';


    let arr= str_arr.split(' ')

    console.log(arr)





}

stringToArray(str)




//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55 ,987, -1011, 0, 1050, 0]

numbers.map(function (value, index) {

    return {...value, id: index + 1};

});

console.log(numbers)

//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

function sortNums(direction){

    let nums = [11, 21, 3];

    nums = nums.sort();

console.log(nums.reverse());

}

sortNums('ascending');

function sortNums2(direction){

    let nums = [11, 21, 3];

    nums = nums.sort();

    console.log(nums);

}

sortNums2('descending');




//є масив

/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/

/*
відсортувати його за спаданням за monthDuration*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortMonths = coursesAndDurationArray.sort((c1, c2) => {

    return c2.monthDuration - c1.monthDuration;

});

console.log(sortMonths.reverse());


//відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredMonth = coursesAndDurationArray.filter(value => value.monthDuration > 5)

console.log(filteredMonth);


//за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let Courses = [{coursesAndDurationArray}]
Courses.map((value, index)  => {

    return {id: index + 1, title: coursesAndDurationArray.title, monthDuration: coursesAndDurationArray.monthDuration};

});

console.log(Courses)




//описати колоду карт (від 6 до туза без джокерів)

//- знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше


const cards = [

    {cardSuit: 'spades', value: '6', color: 'black'},
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'spades', value:'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value:'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value:'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value:'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'}
]


//{
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


let cardSuits = ['', 'spade', 'diamond','heart', 'clubs'];
       let values = ['', 6, 7, 8, 9, 10, 'ace','jack','queen','king','joker'];
    let colors = ['', 'red','black'];

    let desk = () => {

        let desks = [];

        for (const cardSuit of cardSuits) {

            for (const value of values){

                 desks.push({cardSuit: cardSuit, value:value})

            }

            }
        desks.map(item=> item.cardSuit === 'diamonds' || item.cardSuit === 'hearts' ? item.color =  'red' : item.color = 'black')

return desks

    }
        console.log(desk());


//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }



let cardsStacks = cards.reduce(

    (card, group) => {

        if (group.cardSuit === "spades") {

            card[0].push(group);

        }if (group.cardSuit === "diamonds") {

            card[1].push(group);

        }if (group.cardSuit === "hearts") {

            card[2].push(group);

        }
        if (group.cardSuit === "clubs") {

            card[3].push(group);

        }

        return card;


    },
    [[], [], [], []]


);

console.log(cardsStacks)

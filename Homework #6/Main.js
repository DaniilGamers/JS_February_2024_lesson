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

console.log(str_dirty.trim())


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

    return {value: value + +2, id: index + 1};

});

console.log(numbers)


let numsTest = [12,61,6]

console.log(numsTest)

//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

function sortNums(direction){

    let nums = [11, 21, 3];



    let reversed = 'ascending'


    let nums_sorted = nums.sort((a, b) => {

       return a - b;

    });

    if (reversed === direction){


        console.log(nums.reverse());


    }else{


        console.log(nums);
    }





}

sortNums('ascending');




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


let Courses = coursesAndDurationArray
Courses.map((value, index)  => {

    return {id: index + 1, title: coursesAndDurationArray.title, monthDuration: coursesAndDurationArray.monthDuration};

});

console.log(Courses)

//card arrays

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
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value:'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value:'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
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

//описати колоду карт (від 6 до туза без джокерів)

//- знайти піковий туз

let cardSuits8 = ['spade'];

let Values8 = ['6'];

let colors35 = ['red','black'];

let desk7 = () => {

    let desks_spades_only = [];

    for (const cardSuit7 of cardSuits8) {

        for (const value7 of Values8) {

            for (const color_7 of colors35) {

                desks_spades_only.push({cardSuit: cardSuit7, value: value7, color: color_7})

            }

        }

    }

    return desks_spades_only

}

console.log(desk7());



//  - всі шістки

let cardSuits2 = ['spade', 'diamond','heart', 'clubs'];

let sixValues = ['6'];

let colors32 = ['red','black'];

let desk2 = () => {

    let desks_6_only = [];

    for (const cardSuit2 of cardSuits2) {

        for (const value2 of sixValues) {

            desks_6_only.push({cardSuit: cardSuit2, value: value2})

        }

    }

    desks_6_only.map(item=> item.cardSuit === 'diamonds' || item.cardSuit === 'hearts'  ? item.color =  'red' : item.color = 'black')

    return desks_6_only

}
console.log(desk2());

//  - всі червоні карти

let cardSuits3 = ['spade', 'clubs'];

let Values2 = [6, 7, 8, 9, 10, 'ace','jack','queen','king'];

let colors2 = ['black'];

let desk3 = () => {

    let desks_black_only = [];

    for (const cardSuit3 of cardSuits3) {

        for (const Values_2 of Values2) {

            desks_black_only.push({cardSuit: cardSuit3, value: Values_2})

        }

    }

    desks_black_only.map(item=> item.cardSuit === 'diamonds' || item.cardSuit === 'hearts'  ? item.color =  'red' : item.color = 'black')

    return desks_black_only

}
console.log(desk3());


//  - всі буби

let cardSuits4 = ['diamond'];

let Values5 = [6, 7, 8, 9, 10, 'ace','jack','queen','king'];

//let colors3 = ['red'];

let desk4 = () => {

    let desks_diamonds_only = [];

    for (const cardSuit4 of cardSuits4) {

        for (const values_5 of Values5) {

            desks_diamonds_only.push({cardSuit: cardSuit4, value: values_5})

        }

    }

    desks_diamonds_only.map(item=> item.cardSuit === 'diamonds' || item.cardSuit === 'hearts'  ? item.color =  'red' : item.color = 'black')

    return desks_diamonds_only

}
console.log(desk4());


//  - всі трефи від 9 та більше

let cardSuits9 = ['clubs'];

let Values9 = [9, 10, 'ace','jack','queen','king'];

//let colors9 = ['red', 'black'];

let desk8 = () => {

    let desks_clubs_only = [];

    for (const cardSuit9 of cardSuits9) {

        for (const values_9 of Values9) {

            desks_clubs_only.push({cardSuit: cardSuit9, value: values_9})
        }

    }

    desks_clubs_only.map(item=> item.cardSuit === 'diamonds' || item.cardSuit === 'hearts'  ? item.color =  'red' : item.color = 'black')

    return desks_clubs_only

}
console.log(desk8());



//{
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


let cardSuits = ['spade', 'diamond','heart', 'clubs'];
       let values = [6, 7, 8, 9, 10, 'ace','jack','queen','king'];
    let colors = ['red','black'];

    let desk = () => {

        let desks = [];

        for (const cardSuit of cardSuits) {

            for (const value of values){

                 desks.push({cardSuit: cardSuit, value: value})

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

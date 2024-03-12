//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині//


let arr = [

    {name: 'one', id: 0},
    {name: 'two', id: 1},
    {name: 'three', id: 2},
    {name: 'four', id: 3},
    {name: 'five', id: 4},
    {name: 'six', id: 5},
    {name: 'seven', id: 6},
    {name: 'eight', id: 7},
    {name: 'nine', id: 8},
    {name: 'ten', id: 9}

]

for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    document.write(`<div>${arrElement.name}</div>`)

}

document.write('<h2>-------------------------------------</h2>')
document.write('<h2>-------------------------------------</h2>')


//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині//

for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    document.write(`<div>${arrElement.name} - index - ${arrElement.id}</div>`)

}

document.write('<h2>-------------------------------------</h2>')
document.write('<h2>-------------------------------------</h2>')

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.//

let arr2 = [

    {name: 'one', id: 0},
    {name: 'two', id: 1},
    {name: 'three', id: 2},
    {name: 'four', id: 3},
    {name: 'five', id: 4},
    {name: 'six', id: 5},
    {name: 'seven', id: 6},
    {name: 'eight', id: 7},
    {name: 'nine', id: 8},
    {name: 'ten', id: 9},
    {name: 'eleven', id: 10},
    {name: 'twelve', id: 11},
    {name: 'thirteen', id: 12},
    {name: 'fourteen', id: 13},
    {name: 'fifteen', id: 14},
    {name: 'sixteen', id: 15},
    {name: 'seventeen', id: 16},
    {name: 'eighteen', id: 17},
    {name: 'nineteen', id: 18},
    {name: 'twenty', id: 19}

]

let i = 0;

while (i < arr2.length) {

    let arr2Element = arr2[i];
    document.write(`<div><h1>${arr2Element.name}</h1></div>`)
    i++

}

document.write('<h2>-----------------------------</h2>')
document.write('<h2>-----------------------------</h2>')

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.//

let arr3 = [

    {name: 'one'},
    {name: 'two'},
    {name: 'three'},
    {name: 'four'},
    {name: 'five'},
    {name: 'six'},
    {name: 'seven'},
    {name: 'eight'},
    {name: 'nine'},
    {name: 'ten'},
    {name: 'eleven'},
    {name: 'twelve'},
    {name: 'thirteen'},
    {name: 'fourteen'},
    {name: 'fifteen'},
    {name: 'sixteen'},
    {name: 'seventeen'},
    {name: 'eighteen'},
    {name: 'nineteen'},
    {name: 'twenty'},
    //--------------------
    {name: 'one', id: 0},
    {name: 'two', id: 1},
    {name: 'three', id: 2},
    {name: 'four', id: 3},
    {name: 'five', id: 4},
    {name: 'six', id: 5},
    {name: 'seven', id: 6},
    {name: 'eight', id: 7},
    {name: 'nine', id: 8},
    {name: 'ten', id: 9},
    {name: 'eleven', id: 10},
    {name: 'twelve', id: 11},
    {name: 'thirteen', id: 12},
    {name: 'fourteen', id: 13},
    {name: 'fifteen', id: 14},
    {name: 'sixteen', id: 15},
    {name: 'seventeen', id: 16},
    {name: 'eighteen', id: 17},
    {name: 'nineteen', id: 18},
    {name: 'twenty', id: 19}

]

while (i < 40) {

    let arr3Element = arr3[i];
    document.write(`<div>${arr3Element.name} ${arr3Element.id}</div>`)
    i++

}

document.write('<h2>-----------------------------</h2>')
document.write('<h2>-----------------------------</h2>')

//Використовуючи данні з масиву, за допомоги document.write та циклу//
// побудувати структуру по шаблону//


//Масив://

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

//ШАБЛОН://

//<ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>

for (const list of listOfItems) {

    document.write(`<ul><h2><li><div>${list}</div></li></h2>

</ul>`)

}


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {

    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title} --- Price ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image">
</div>`)

}


//є масив

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let user of users) {
    if (user.status === false) {
        console.log(user);
    }

}

console.log('-----------------------')
console.log('-----------------------')

for (let user of users) {
    if (user.status === true) {
        console.log(user);
    }

}

console.log('-----------------------')
console.log('-----------------------')

for (let user of users) {
    if (user.age > 30) {
        console.log(user);
    }

}
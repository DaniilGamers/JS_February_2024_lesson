//Масиви та об'єкти:


// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль//


let task1 = [

    {id: 2, height: 195, expression: 'neutral', hobby: 'drawing', Song: 'Japanese', members: 10, color: 'blue', job: 'programmer', Favourite_country: 'Japan', Skill: 'fast tapping'}

]

console.log(task1)
console.log(task1[0].id)
console.log(task1[0].height)
console.log(task1[0].expression)
console.log(task1[0].hobby)
console.log(task1[0].Song)
console.log(task1[0].members)
console.log(task1[0].color)
console.log(task1[0].job)
console.log(task1[0].Favourite_country)
console.log(task1[0].Skill)

console.log('------------------')
console.log('------------------')

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.//

let books = [

    {title: 'Harry Potter', pageCount: 60, genre: 'fantastic, adventure, school life'}

]

console.log(books)

console.log('------------------')
console.log('------------------')

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.//

let books2 = [

    {title: 'Harry Potter', pageCount: 90, genre: 'fantastic, adventure', authors: 'Johna Rolling', name: 'Johna', age: 60}

]

console.log(books2)

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача//

let users= [

    {id: 0, name: 'head0asq', password: 2312303412452},
    {id: 1, name: 'luu231gar', password: 12093841921},
    {id: 2, name: '39412012', password: 1000020129},
    {id: 3, name: 'lif23213', password: 2312321},
    {id: 4, name: '192921023dir', password: 209328120000321},
    {id: 5, name: 'fir23021for', password: 2310440291},
    {id: 6, name: 'l19238sq', password: 23111110000000222},
    {id: 7, name: '10293dow13213', password: 232321912654332},
    {id: 8, name: '20310sos93219', password: 233232011111},
    {id: 9, name: '23021111', password: 158472791923},


];

console.log('------------------')
console.log('------------------')

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

console.log('------------------')
console.log('------------------')

//Логічні розгалуження://

// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3//

let a= 0

if (a === 0) {

    console.log(false)



}

if (a === 1) {

    console.log(true)



}

if (a === -3) {

    console.log(true)



}

console.log('------------------')
console.log('------------------')

//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число//
//(в першу, другу, третю или четверту частину години).//

let time = 59

if (time > 0  && time <= 14) {
    document.write('<h2>Перша частина години</h2>')
} else if (time > 15  && time <= 29) {
    document.write('<h2>Друга частина години</h2>')
}else if (time > 30  && time <= 44) {
    document.write('<h2>Третя частина години</h2>')
}else if (time > 45  && time <= 59) {
    document.write('<h2>Четверта частина години</h2>')
}else {

    document.write('<h2>??? частина години</h2>')

}

document.write('<h2>-----------------------------</h2>')
document.write('<h2>-----------------------------</h2>')

//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).//


let day = 4

if (day > 0  && day <= 11) {
    document.write('<h2>Перша частина місяця</h2>')
} else if (day > 12  && day <= 21) {
    document.write('<h2>Друга частина місяця</h2>')
}else if (day > 22  && day <= 31) {
    document.write('<h2>Третя частина місяця</h2>')
}else {

    document.write('<h2>??? частина місяця</h2>')

}


console.log('------------------')
console.log('------------------')

document.write('<h2>-----------------------------</h2>')
document.write('<h2>-----------------------------</h2>')

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).//

let weekday = 2

switch (weekday) {

    case 1:
        document.write('<h2>Monday <br><br>Lesson of Javascript</h2>')
        break;

    case 2:
        document.write('<h2>Tuesday <br><br>Consultation of Javascript</h2>')
        break;

    case 3:
        document.write('<h2>Wednesday <br><br>Website development story</h2>')
        break;

    case 4:
        document.write('<h2>Thursday <br><br>Lesson of Javascript</h2>')
        break;

    case 5:
        document.write('<h2>Friday <br><br>development of Javascript</h2>')
        break;

    case 6:
        document.write('<h2>Saturday <br><br>English lesson</h2>')
        break;

    case 7:
        document.write('<h2>Sunday <br><br>Free day!!!</h2>')
        break;
}

document.write('<h2>-----------------------------</h2>')
document.write('<h2>-----------------------------</h2>')

//Користувач вводить або має два числа.//
//Потрібно знайти та вивести максимальне число з тих двох.//
// Також потрібно врахувати коли введені рівні числа.//

let num_a = 576

let num_b = 576

if (num_a === num_b){


    document.write(Math.max(num_a, num_b) + ' Same' + ' MAX')

}
if (num_a < num_b || num_b < num_a) {

    document.write(Math.max(num_a, num_b) + ' MAX')

}

//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,//
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).//

let x = {

    string: '',
    number: 0

}

if (x.string === 'falsy' || x.string === 'null' || x.string === 'undefined' || x.string === 'error' || x.number === 0 || x.number === 404) {

    console.log(false)

}


else {

    console.log('default')

}

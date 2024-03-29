//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let div = document.createElement("div");
document.body.appendChild(div)
let f1 = document.forms['f1'];
console.log(f1);
let inputName = f1['Name'];
inputName.value = '';

console.log(inputName);
let h2 = document.getElementById('h2');
h2.innerText = 'Name: '
inputName.oninput = function (){
    h2.innerText = 'Name: ' + this.value

};


let inputSurName = f1['Surname'];
inputSurName.value = '';
console.log(inputSurName);

let h22 = document.getElementById('h2_3');
h22.innerText = 'Surname: '
inputSurName.oninput = function (){
    h22.innerText = 'Surname: ' + this.value;

};

let ageInput = f1['Age'];

ageInput.value = '';
let h24 = document.getElementById('h2_4');
h24.innerText = 'Age: '
console.log(ageInput);
ageInput.oninput = function () {
    h24.innerText = 'Age: ' + this.value;
}

let info = [];

div.submit = function (e) {

    e.preventDefault();
    console.log(e);
    let obj = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value
    }

    info.push(obj);
    console.log(info);
    div.append(h2, h22, div)
};



// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

document.write('---------------------------------')
document.write('---------------------------------')

function countNumber(){

    let count = parseInt(localStorage.getItem('count'))|| 0;



if (window.location.reload) {

    count += 1;

}

    localStorage.setItem('count', JSON.stringify(count));



}

countNumber();
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

function saveVisit () {
    let sessions = localStorage.getItem('sessions');
    let arrayOfSessions = JSON.parse(sessions);
    console.log(arrayOfSessions)
    if (!arrayOfSessions){
        arrayOfSessions = [];
    }

    let date = new Date();
    arrayOfSessions.push({
        day: date.getDate(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

    let sessionsForLS = JSON.stringify(arrayOfSessions);
    localStorage.setItem('sessions', sessionsForLS);

}

saveVisit();

// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let objects = [

    {id: 0, objectName: 'Shovel'},
    {id: 1, objectName: 'Can'},
    {id: 2, objectName: 'Figure'},
    {id: 3, objectName: 'Brush'},
    {id: 4, objectName: 'Pickaxe'},
    {id: 5, objectName: 'pipe'},
    {id: 6, objectName: 'sketchbook'},
    {id: 7, objectName: 'Book'},
    {id: 8, objectName: 'plastic'},
    {id: 9, objectName: 'Metal pipe'},
    {id: 10, objectName: 'poor Shovel'},
    {id: 11, objectName: 'Can of beans'},
    {id: 12, objectName: 'Anime figure'},
    {id: 13, objectName: 'Brush stick'},
    {id: 14, objectName: 'Diamond pickaxe'},
    {id: 15, objectName: 'rusted pipe'},
    {id: 16, objectName: 'cheap sketchbook'},
    {id: 17, objectName: 'Old book'},
    {id: 18, objectName: 'plastic bottle'},
    {id: 19, objectName: 'Wrench'},
    {id: 20, objectName: 'Old Wrench'},
    {id: 21, objectName: 'rusted Wrench'},
    {id: 22, objectName: 'Bottle of water'},
    {id: 23, objectName: 'Gold pickaxe'},
    {id: 24, objectName: 'TV'},
    {id: 25, objectName: 'Tablet'},
    {id: 26, objectName: 'Pen'},
    {id: 27, objectName: 'Stylus'},
    {id: 28, objectName: 'Picture'},
    {id: 29, objectName: 'Bone'},
    {id: 30, objectName: 'Block'},
    {id: 31, objectName: 'water can'},
    {id: 32, objectName: 'Bucket'},
    {id: 33, objectName: 'plate'},
    {id: 34, objectName: 'Knife'},
    {id: 35, objectName: 'toaster'},
    {id: 36, objectName: 'microwave'},
    {id: 37, objectName: 'cloth'},
    {id: 38, objectName: 'Stick'},
    {id: 39, objectName: 'Hammer'},
    {id: 40, objectName: 'Cup'},
    {id: 41, objectName: 'scissors'},
    {id: 42, objectName: 'sharp knife'},
    {id: 43, objectName: 'knife board'},
    {id: 44, objectName: 'board'},
    {id: 45, objectName: 'Ball'},
    {id: 46, objectName: 'Ball for volleyball'},
    {id: 47, objectName: 'Ball for football'},
    {id: 48, objectName: 'Ball for basketball'},
    {id: 49, objectName: 'Phone'},
    {id: 50, objectName: 'fire stick'},
    {id: 51, objectName: 'Table'},
    {id: 52, objectName: 'fire'},
    {id: 53, objectName: 'water'},
    {id: 54, objectName: 'minigun'},
    {id: 55, objectName: 'fireproof'},
    {id: 56, objectName: 'garden'},
    {id: 57, objectName: 'campfire'},
    {id: 58, objectName: 'fire sword'},
    {id: 59, objectName: 'water gun'},
    {id: 60, objectName: 'fire gun'},
    {id: 61, objectName: 'plastic table'},
    {id: 62, objectName: 'shelves'},
    {id: 63, objectName: 'wood shelf'},
    {id: 64, objectName: 'wood chair'},
    {id: 65, objectName: 'metal table'},
    {id: 66, objectName: 'pool'},
    {id: 67, objectName: 'metal chair'},
    {id: 68, objectName: 'wood floor'},
    {id: 69, objectName: 'black and white floor'},
    {id: 70, objectName: 'plants'},
    {id: 71, objectName: 'trees'},
    {id: 72, objectName: 'tomato'},
    {id: 73, objectName: 'carrot'},
    {id: 74, objectName: 'potato'},
    {id: 75, objectName: 'corn'},
    {id: 76, objectName: 'strawberry'},
    {id: 77, objectName: 'apple'},
    {id: 78, objectName: 'banana'},
    {id: 79, objectName: 'lemon'},
    {id: 80, objectName: 'peach'},
    {id: 81, objectName: 'dirt'},
    {id: 82, objectName: 'earth'},
    {id: 83, objectName: 'Car'},
    {id: 84, objectName: 'Ferrari'},
    {id: 85, objectName: 'motorcycle'},
    {id: 86, objectName: 'metal stick'},
    {id: 87, objectName: 'golden stick'},
    {id: 88, objectName: 'road'},
    {id: 89, objectName: 'asphalt'},
    {id: 90, objectName: 'house'},
    {id: 91, objectName: 'roof'},
    {id: 92, objectName: 'flat roof'},
    {id: 93, objectName: 'Wooden house'},
    {id: 94, objectName: 'lantern'},
    {id: 95, objectName: 'lava lantern'},
    {id: 96, objectName: 'Flickering lantern'},
    {id: 97, objectName: 'Bucket of water'},
    {id: 98, objectName: 'wire'},
    {id: 99, objectName: 'cable'},
    {id: 100, objectName: 'golden wire'}
];






function prevButton ()  {

    objects_page -= 10
    localStorage.setItem('pages', JSON.stringify(objects_page))
}
function nextButton () {

    objects_page += 10

}

let objects_page = parseInt(localStorage.getItem('Pages'))|| 0;
switch (objects_page) {
    case 0:
        objects.splice(11,100);
        break
    case 10:
        objects.splice(21,100);
        objects.splice(0,11);
        break
    case 20:
        objects.splice(31,100);
        objects.splice(0,21);
        break
    case 30:
        objects.splice(41,100);
        objects.splice(0,31);
        break
    case 40:
        objects.splice(51,100);
        objects.splice(0,41);
        break
    case 50:
        objects.splice(61,100);
        objects.splice(0,51);
        break
    case 60:
        objects.splice(71,100);
        objects.splice(0,61);
        break
    case 70:
        objects.splice(81,100);
        objects.splice(0,71);
        break
    case 80:
        objects.splice(91,100);
        objects.splice(0,81);
        break
    case 90:
        objects.splice(101,100);
        objects.splice(0,91);
        break
}


    for (const object of objects) {
        const elements = document.createElement('div23');
        elements.classList.add('elementObject')



        let h3 = document.createElement('h3');
        h3.innerText = object.objectName;



        elements.append(h3);

        console.log(object);
document.body.appendChild(elements)



}

//let prevButton = function () {
    //return i + 10;
//}





//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//


let text1 = document.getElementById('text')

function removeText() {

text1.remove()
}
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача





let ageForm = document.forms['AgeForm'];
let AgeFormInput = parseInt(ageForm.value);



ageForm.input = function (age){
    age.preventDefault();
    if (Number(AgeFormInput) < 18){
        let h1 = document.getElementById('Age_box');
        h1.innerText = 'You\'re too young!'
        let divAge = document.getElementById('AgeDiv')
        divAge.appendChild(h1);
    }else{
        let h1 = document.getElementById('Age_box');
        h1.innerText = 'Welcome!!!'
        let divAge = document.getElementById('AgeDiv')
        divAge.appendChild(h1);
    }



};


//
//
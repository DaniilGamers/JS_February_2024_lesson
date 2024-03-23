//- створити блок,
//    - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.




let block = document.body;

console.log(block, '')
console.log(block.children);

let wraps = document.getElementsByClassName('wrap')

console.log(wraps)

for (const wraps_ of wraps){

    wraps_.display = 'flex';

    console.log(wraps_)

}

let collapses = document.getElementsByClassName('collapse')

console.log(collapses)

for (const collapses_ of collapses){

    console.log(collapses_)

}

let alpha = document.getElementsByClassName('alpha')

console.log(alpha)

for (const alpha_ of alpha){

    console.log(alpha_)

}

let beta = document.getElementsByClassName('beta')

console.log(beta)

for (const betas of beta){

    console.log(betas)

}


let text = block.getElementsByTagName('ul');

console.log(text);
for (const li of text) {

    li.style.backgroundColor = 'blue';
    li.style.color = 'white';
    li.style.fontSize = '24px';
    li.style.textEmphasisColor = 'white';

}




// - Є масив:
//    ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


let infoSite = ['Main','Products','About us','Contacts']

let InfoWords = document.getElementsByClassName('infoSite')[0];

let ul = document.createElement('ul')

for (let Info of infoSite){

    let li = document.createElement('li');

    li.innerText = `${Info}`;

    InfoWords.appendChild(li);


}

document.body.appendChild(ul)

document.write(`<h2>---------------------------------------------</h2>`)
document.write(`<h2>---------------------------------------------</h2>`)


// - Є масив
//let coursesAndDurationArray = [
/// {title: 'JavaScript Complex', monthDuration: 5},
/// {title: 'Java Complex', monthDuration: 6},
/// {title: 'Python Complex', monthDuration: 6},
/// {title: 'QA Complex', monthDuration: 4},
/// {title: 'FullStack', monthDuration: 7},
/// {title: 'Frontend', monthDuration: 4}
//];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.


let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
    ];


for (const InfoCourse of coursesAndDurationArray){


    let InfoCourseDiv = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = InfoCourse.title;

    let p = document.createElement('p');
    p.innerText = InfoCourse.monthDuration;

    InfoCourseDiv.append(h2, 'Month duration', p)

    document.body.appendChild(InfoCourseDiv);

}

document.write(`<h2>---------------------------------------------</h2>`)
document.write(`<h2>---------------------------------------------</h2>`)

//=========================

//    - Є масив
//let coursesAndDurationArray = [
//  {title: 'JavaScript Complex', monthDuration: 5},
//  {title: 'Java Complex', monthDuration: 6},
//  {title: 'Python Complex', monthDuration: 6},
//  {title: 'QA Complex', monthDuration: 4},
//  {title: 'FullStack', monthDuration: 7},
//  {title: 'Frontend', monthDuration: 4}
//];


//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
 //   Завдання робити через цикли.

let item = document.getElementsByClassName('item')[0];

let  h1 = document.getElementsByClassName('heading')[0];

let p1 = document.getElementsByClassName('description')[0]


for (const InfoCourse1 of coursesAndDurationArray) {

    let InfoCourseDiv1 = document.createElement('item');
    document.body.appendChild(item);

    let h12 = document.createElement('h1');
    h12.innerText = InfoCourse1.title;

    let p1 = document.createElement('p1');
    p1.innerText = InfoCourse1.monthDuration;

    item.append(h12, 'Month duration  - ', p1)

    document.body.appendChild(InfoCourseDiv1);

}


document.write(`<h2>---------------------------------------------</h2>`)
document.write(`<h2>---------------------------------------------</h2>`)

//==========================

//- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
 //   Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

/*
const Block = document.getElementsByClassName('simpson')[0];

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons){

    let div2 = document.createElement('div');
    div2.classList.add('member');

    Block.appendChild(div2)

    let h2 = document.createElement('h2');
    h2.innerText = `Name - ${simpson.name}, 
    surname - ${simpson.surname}, 
    age - ${simpson.age}, 
    info - ${simpson.info}`

    let img = document.createElement('img');
    img.src = simpson.photo;


    div2.append(h2, img);

}


console.log(document.getElementsByTagName('img'));
*/


//=========================
//    Цикл в циклі
//- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//------------------


document.write(`<h2>---------------------------------------------</h2>`)
document.write(`<h2>---------------------------------------------</h2>`)


let coursesArray  = [
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']




    }
];

for (const course of coursesArray){

    let ArrayDiv = document.createElement('div')
    document.body.appendChild(ArrayDiv);

    ArrayDiv.style.borderStyle = 'solid';
    ArrayDiv.style.borderColor ='darkblue'
    ArrayDiv.style.margin = '10px'

    ArrayDiv.classList.add('course')

    let CourseTitle = document.createElement('h2');
    ArrayDiv.appendChild(CourseTitle);
    CourseTitle.classList.add('title')
    CourseTitle.innerText = `${course.title}`;
    CourseTitle.style.borderStyle = 'solid';
    CourseTitle.style.borderColor = 'red';
    CourseTitle.style.margin = '20px'

    let CourseDuration = document.createElement('h2');
    ArrayDiv.appendChild(CourseDuration);
    CourseDuration.classList.add('duration');


    let CourseMonth = document.createElement('h3');
    CourseDuration.appendChild(CourseMonth);
    CourseMonth.classList.add('CourseMonth')
    CourseMonth.innerText = `${'Month duration  -  '  + course.monthDuration}`;
    CourseMonth.style.borderStyle = 'solid';
    CourseMonth.style.borderColor = 'red';
    CourseMonth.style.margin = '20px'

    let CourseHour = document.createElement('h3');
    CourseDuration.appendChild(CourseHour);
    CourseHour.classList.add('CourseHour')
    CourseHour.innerText = `${'Hour duration  -  '  + course.hourDuration}`;
    CourseHour.style.borderStyle = 'solid';
    CourseHour.style.borderColor = 'red';
    CourseHour.style.margin = '20px'




    let ul = document.createElement('ul');
    ArrayDiv.appendChild(ul);


for (let liElements of course.modules) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.style.borderStyle = 'solid';
    li.style.borderColor = 'red';
    li.style.margin = '20px'
    li.innerText = liElements;

}
}


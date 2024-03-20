//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone

}

let user1 =  new User('0', 'Shiro', 'Kazami', 'Shirothebest@gmail.com', '+5423476543')

let user2 =  new User('1', 'Jack', 'Kennedy', 'Jacktheunknown@gmail.com', '+0008767652')

let user3 =  new User('2', 'Ann', 'Misaki', 'Misaki@gmail.com', '+6543545435')

let user4 =  new User('3', 'Dan', 'Kazami', 'DanGamer@gmail.com', '+5475842345')

let user5 =  new User('4', 'Eric', 'Ryuji', 'EricSky@gmail.com', '+4493933834')

let user6 =  new User('5', 'James', 'Break', 'Jamesthe001@gmail.com', '+0001132843')

let user7 =  new User('6', 'Larry', 'Kitaki', 'Kitakigames@gmail.com', '+5843124597')

let user8 =  new User('7', 'Tetsuya', 'Uzumaki', 'UzuTetsu@gmail.com', '+4932439213')

let user9 =  new User('8', 'Yuri', 'Break', 'YuBR@gmail.com', '+9765512354')

let user10 =  new User('9', 'Tanjiro', 'Uzumaki', 'Tanjimaki@gmail.com', '+6545434433')

console.log(user1)

console.log(user2)

console.log(user3)

console.log(user4)

console.log(user5)

console.log(user6)

console.log(user7)

console.log(user8)

console.log(user9)

console.log(user10)


console.log('---------------------------------------')
console.log('---------------------------------------')


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)




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

function filterId(array, predicateFn) {
    let filterId = [];
    for (const item of array) {
        if (predicateFn(item)) {
            filterId.push(item);
        }
    }
    return filterId
}

console.log(filterId(users, (item) => item.id === 2));

console.log('---------------------------------------')
console.log('---------------------------------------')



//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


let idSorted = users.sort((u1, u2) => {

 return u2.id - u1.id;

});

console.log(idSorted)

console.log('---------------------------------------')
console.log('---------------------------------------')

//

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order

    }

}

let client1 = new Client('0', 'Vasya', 'Bolei', 'BoleiHelp@gmail.com', '3728378123', 'Shovel, plants, cart')

let client2 = new Client('1', 'Ser', 'Jr', 'JrSer@gmail.com', '5879455432', 'Planks for house, saw, hammer, screwdriver')

let client3 = new Client('2', 'Yui', 'Paper', 'PaperYui@gmail.com', '6545456123', 'anime figure, minifigures, A4 papers')

let client4 = new Client('3', 'Nastya', 'Murukura', 'Murutya@gmail.com', '6547653446', 'Drawing table, figure for posing')

let client5 = new Client('4', 'Vera', 'Kunai', 'Kunai@gmail.com', '6548966543', 'Samurai blade')

let client6 = new Client('5', 'Kai', 'Hikari', 'Hikai@gmail.com', '4561093258', 'Sketchbook, pencil, eraser')

let client7 = new Client('6', 'Rei', 'Murukura', 'Murrei@gmail.com', '4584984376', 'tools for artists')

let client8 = new Client('7', 'Sora', 'Key', 'Key@gmail.com', '4327984323', 'ps2, psp, ps2, Nintendo Switch')

let client9 = new Client('8', 'Tadashi', 'Hikari', 'Hidashi@gmail.com', '6457853244', 'Axe')

let client10 = new Client('9', 'Rhyme', 'Murukura', 'Murume@gmail.com', '4899832213', 'Posters')

console.log(client1)

console.log(client2)

console.log(client3)

console.log(client4)

console.log(client5)

console.log(client6)

console.log(client7)

console.log(client8)

console.log(client9)

console.log(client10)

console.log('---------------------------------------')
console.log('---------------------------------------')

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//

let SortOrder = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]

let SortOrders = SortOrder.sort((u1, u2) => {

    return u2.order.length - u1.order.length;

});

console.log(SortOrders)

console.log('---------------------------------------')
console.log('---------------------------------------')

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

function CarsF (model, creator, year, maxSpeed, Engine_space){



        this.modelF = model;
        this.creatorF = creator;
        this.yearF = year;
        this.maxSpeedF = maxSpeed;
        this.Engine_spaceF = Engine_space;



    function drive(speedMsg){

        console.log(speedMsg + 'їдемо зі швидкістю' + ' ' + this.maxSpeed + ' ' + 'на годину');
    }


    function infoF(infoMsg){

        console.log(infoMsg + 'Model - ' + this.model, '| creator - ' + this.creator, '| year - ' + this.year, '| maxSpeed - ' + this.maxSpeed, '| Engine space - ' + this.Engine_space)

    }

    function increaseMaxSpeed(newSpeed){

        return car12.maxSpeed + newSpeed;

    }

    function changeYearF(newValue){



        return this.year = newValue

    }



    function addDriverF(driver){




        let Driver_add = addedDriveF.push(driver, car12)

        console.log(Driver_add)


    }




}

let car12 = new CarsF('Toyota','Kiichiro Toyoda',1934,162,'5890 ml')

console.log(car12);

car12.drive2 = function (speedFMsg){

    console.log(speedFMsg + 'їдемо зі швидкістю' + ' ' + car12.maxSpeedF + ' ' + 'на годину');

}

car12.drive2('')

car12.infoF = function (infoFMsg){

    console.log(infoFMsg + 'Model - ' + this.modelF, '| creator - ' + this.creatorF, '| year - ' + this.yearF, '| maxSpeed - ' + this.maxSpeedF, '| Engine space - ' + this.Engine_spaceF)

}

car12.infoF('')


car12.increaseMaxSpeedF = function (newSpeedF){

    return car12.maxSpeedF + newSpeedF;

}

console.log(car12.increaseMaxSpeedF(37));


car12.changeYearF = function (newValueF){

    return this.yearF = newValueF

}

console.log(car12.changeYearF(2022));

let addedDriveF = []


car12.addDriverF = function (driverF){

    addedDriveF.push(driverF, car12)

    console.log(addedDriveF)

}


car12.addDriverF('Driver - Hikari');



console.log('---------------------------------------')
console.log('---------------------------------------')

//car1.maxSpeed(Drive)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//


class Cars {

    constructor(model, creator, year, maxSpeed, Engine_space){

        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.Engine_space = Engine_space;



    }

    drive2(speedMsg){

        console.log(speedMsg + 'їдемо зі швидкістю' + ' ' + this.maxSpeed + ' ' + 'на годину');
    }


    info(infoMsg){

        console.log(infoMsg + 'Model - ' + this.model, '| creator - ' + this.creator, '| year - ' + this.year, '| maxSpeed - ' + this.maxSpeed, '| Engine space - ' + this.Engine_space)

    }

    increaseMaxSpeed(newSpeed){

        return car11.maxSpeed + newSpeed;

    }

    changeYear(newValue){



        return this.year = newValue

    }

    addedDriver = []

    addDriver(driver){




        this.addedDriver.push(driver, car11)

        console.log(this.addedDriver)


    }




}

let car11 = new Cars('Toyota','Kiichiro Toyoda',1934,162,'5890 ml')

console.log(car11);

car11.drive2('');
car11.info('')
console.log(car11.increaseMaxSpeed(57));
console.log(car11.changeYear(2012));

car11.addDriver('Driver - Shiro');

console.log('---------------------------------------')
console.log('---------------------------------------')


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.



class Cinderella {

    constructor(Name, age, feet_size) {

        this.Name = Name;
        this.age = age;
        this.feet_size = feet_size

    }

}

let Cinderella1 = new Cinderella('Nastya', 20, 7);
let Cinderella2 = new Cinderella('Aurora', 25, 9);
let Cinderella3 = new Cinderella('Nadia', 18, 6);
let Cinderella4 = new Cinderella('Rachel', 23, 8);
let Cinderella5 = new Cinderella('Lisa', 20, 7);
let Cinderella6 = new Cinderella('Elizabeth', 22, 8);
let Cinderella7 = new Cinderella('Ray', 21, 7);
let Cinderella8 = new Cinderella('Ellie', 19, 6);
let Cinderella9 = new Cinderella('Ollie', 21, 7);
let Cinderella10 = new Cinderella('Margaret', 22, 8);

console.log(Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9, Cinderella10)

class Prince{

    constructor(Name, age, shoe) {

        this.name = Name;
        this.age = age;
        this.shoe = shoe

    }

}

let prince = new Prince('Kostya', 23, 'Leather')

console.log(prince)

let new_princess = []

    if (Cinderella1.feet_size === 7){

        if (Cinderella7.age === 21){

            if (Cinderella7.Name.length > Cinderella9.Name.length){

                Cinderella7.Name.push(new_princess)

                console.log('Prince found a new princess!' + ' ' + Cinderella7.Name + '!!!!')

            }else {


                //Cinderella9.Name.push(new_princess)

                console.log('Prince found a new princess!' + ' ' + Cinderella9.Name + '!!!!')


            }



    }



}

console.log(new_princess)
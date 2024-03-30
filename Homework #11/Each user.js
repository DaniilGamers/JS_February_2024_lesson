// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

const userId = new URL(location.href).searchParams.get('id');
console.log(userId);
let baseUrl = 'http://jsonplaceholder.typicode.com/users/'+userId

fetch(baseUrl)
    .then(res => res.json())
.then(usersId => {
    console.log(usersId)
    let main = document.createElement('div')
    document.body.appendChild(main)
for (let resultUserKey in usersId){

console.log(resultUserKey)

    let divUser = document.createElement('divUserKey');
if(resultUserKey === 'address' || resultUserKey === 'company'){
    for (const UserKey in usersId[resultUserKey]){

        let p = document.createElement('h4')
        main.appendChild(p)
        p.innerText = `${UserKey} - ${usersId[resultUserKey][UserKey]}`
    }
}else{

let div_User = document.createElement('h4')
    main.appendChild(div_User)
div_User.innerText = `${resultUserKey} - ${usersId[resultUserKey]}`

main.appendChild(divUser)

}
}
});
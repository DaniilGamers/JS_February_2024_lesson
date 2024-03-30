
//
// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
console.log(users)


            let divUsers = document.createElement('div');
            divUsers.innerHTML = '';
            divUsers.classList.add('users');
            document.body.appendChild(divUsers);

            for (let userElement of users) {
                console.log(userElement)

                let infoUser = document.createElement('h3')

                document.write(`<ul><h3><li><a href='user_details.html?id=${userElement.id}'>${userElement.id} --- ${userElement.name}</a></li></h3></ul>`);

                document.write('<h2>--------------------------------</h2>')



                document.body.appendChild(infoUser)
            }
        }

    });
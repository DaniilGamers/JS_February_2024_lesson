fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {

        let divUsers = document.createElement('div');

        document.body.appendChild(divUsers);
        divUsers.classList.add('users');
        for (const user of users) {
            //console.log(users)


let objects = document.createElement('div')

            objects.classList.add('ObjectBlock')

                let h3 = document.createElement('h2')

            let linkText = document.createElement('h4')

            h3.innerText = `${user.id} - ${user.name}`;

linkText.classList.add("LinkButton")

            linkText.innerHTML = `
                <h4 id="linkButton">Click here for full details</h4>
                
                `


            linkText.addEventListener('click', () =>{
                location.href = 'user_details.html?id='+ user.id;
            })

                objects.append(h3)
            objects.appendChild(linkText)
            divUsers.appendChild(objects)

            }
    });
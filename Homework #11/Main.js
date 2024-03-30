//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

/*fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(carts => {
        for (const cart of carts.carts) {


            let divCarts = document.createElement('div');
            divCarts.classList.add('product');
            document.body.appendChild(divCarts);

            for (let cartElement of cart.products) {
                console.log(cartElement)

                let infoProd = document.createElement('h1')

                document.write(`<ul id="h1"><h3><li>${cartElement.id}</li> <br><br> Title - ${cartElement.title} <br><br> Price - ${cartElement.price} <br><br> Quantity - ${cartElement.quantity} <br><br> Total - ${cartElement.total} <br><br> DiscountedPercentage - ${cartElement.DiscountedPercentage} <br><br> DiscountedPrice - ${cartElement.discountedPrice} <br><br> <img style="width: 250px" src="${cartElement.thumbnail}" alt=""> </h3></ul>`);
                    document.body.appendChild(infoProd)
            }
        }
document.write('<h1>------------------------------------ <br> ------------------------------------</h1>')
    });*/



//


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

                document.write(`<ul><h3><li>${userElement.id} --- ${userElement.name}</a></li></h3></ul>`);

                document.write('<h2>--------------------------------</h2>')



                document.body.appendChild(infoUser)
            }
        }

    });
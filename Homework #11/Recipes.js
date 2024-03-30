// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipes => {
        for (let recipe of recipes.recipes) {

            document.write(`<br><h3><li>${recipe.id} - ${recipe.name}</li></h3>`)

            document.write(`<ul><h3><Br>Ingredients</h3></ul>`)

            for (const recipeIng of recipe.ingredients){

                document.write(`<ul><br><li>${recipeIng}</li></ul>`)

            }

            document.write(`<ul><h3><Br>Instructions</h3></ul>`)

            for (const recipeIns of recipe.instructions){

                document.write(`<ul><br><li>${recipeIns}</li></ul>`)

            }

            document.write(`<br><Br><h3>Pre time Minutes - ${recipe.prepTimeMinutes} <br><Br>Cook time minutes - ${recipe.cookTimeMinutes} <br><Br>Servings - ${recipe.servings} <br><Br>Difficulty - ${recipe.difficulty} <Br><Br>Cuisine - ${recipe.cuisine} <br><Br>Calories Per Serving - ${recipe.caloriesPerServing}</h3>`)

            document.write(`<ul><h3><Br>Tags</h3></ul>`)

            for (const recipeTag of recipe.tags){

                document.write(`<ul><br><li>${recipeTag}</li></ul>`)

            }

            document.write(`<br><h3>User id - ${recipe.userId} <br><br><img style="width: 250px" src="${recipe.image}" alt="" > <br><br>Rating - ${recipe.rating} <br><br>Review count - ${recipe.reviewCount}</h3>`)

            document.write(`<ul><h3><Br>Meal types</h3></ul>`)

            for (const recipeType of recipe.mealType){

                document.write(`<ul><br><li>${recipeType}</li></ul>`)

            }

        }


    });
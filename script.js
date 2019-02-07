const outputElement = document.querySelector(".foods");
const favoriteFoods = [
{
    food: "spaghetti",
    ethnicity: "italian",
    weight: "to each its own",
    vegetarian: true
},
{
    food: "sausage",
    ethnicity: "american",
    weight: "heavy",
    vegetarian: false
}
]



// Iterate the array of objects. Individual objects stored in `visit`.
favoriteFoods.forEach(food => {
   let eachFood = food
    // Iterate all of the values of the current visit
    for (const foody of Object.entries(eachFood)) {
        console.log(foody)
        outputElement.innerHTML += `<div>${foody[0]}: ${foody[1]}</div>`
    }
})


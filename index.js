// Write your solution in this file!


//menu with milkshakes & burgers. menu features for both milkshake and burger

const burgers = ['Hamburger', 'Cheeseburger']
let featuredDrink = 'Stawberry Milkshake'


function addBurger(){
    const newBurger = "Flatburger"
    burgers.push(newBurger);
}

if (true) {
    let anotherNewBurger = "Maple Bacon Burger"
    burgers.push(anotherNewBurger);
}
addBurger();

//update the featured drink
function changeFeaturedDrink(){

        featuredDrink= "JavaShake"
       

}
changeFeaturedDrink();


console.log(burgers);
console.log(featuredDrink);
// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let a = 0;
while (a < restaurants.length) {
    newRestaurants.push(`Restaurant Name: ` + restaurants[a])
    a++;
}

console.log(newRestaurants);

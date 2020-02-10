/* MARS ROVER KATA
// ======================
let marsRover = {
  direction: "N",
  x : 0,
  y : 0,
  travelLog: [{x:0, y:0}]
}


// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
      case "E":
      rover.direction = "N";
        break;
  }
  console.log("turnLeft was called!");
  }

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
  }


function moveForward(rover){
  if (rover.x >= 0 && rover.y >= 0 && rover.x < 10 && rover.y < 10){
  switch(rover.direction) {
    case "N":
      marsRover.y++;
      break;
    case "E":
      marsRover.x++;
      break;
    case "S":
      marsRover.y--;
      break;
    case "W":
      marsRover.x--;
      break;
  }
  } else {
    console.log("You cant place player outside of the board!!!!!");
  }
  console.log("moveForward was called");
  console.log(`Rover has position: x=${rover.x}, y=${rover.y}`);
  let newPosition = {x: rover.x, y: rover.y};
    marsRover.travelLog.push(newPosition);
}

moveForward(marsRover);


function command(marsRover, orders){
  for (let i = 0; i< orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l":
        turnLeft(marsRover, order);
        break;
      case "r":
        turnRight(marsRover, order);
        break;
      case "f":
        moveForward(marsRover, order);
        break;
      default:
        console.log("invalid command");
    }
  }
  console.log(marsRover.travelLog);
}
command(marsRover, "lrffrfflfrff");
*/


/*PRACTICE PRE MARS ROVER KATA
const player = {
  x:1,
  y:1,
  path: [{x:1, y:1}]
};

function placeHorizontal(thePlayer, command)
{
  if(thePlayer.y >= 0 && thePlayer.y < 2){
    if(command === "l"){
      thePlayer.y--;
    } else {
      thePlayer.y++;
    }
    console.log(`Player has position: x=${thePlayer.x}, y=${thePlayer.y}`);

    let newPosition = {x: thePlayer.x, y: thePlayer.y};
    thePlayer.path.push(newPosition);
} else {
  console.log("You cant place player outside of the board!");
 }
}

//for (let i=0; i< player.path.length; i++){
  //console.log(`Path ${i} ==> x=${player.path[i].x}, y=${player.path[i].y}`)
//}

function placeVertical (thePlayer, command) {
  if(thePlayer.x >= 0 && thePlayer.x < 2){
    if (command === "u"){
      thePlayer.x--;
    } else {
      thePlayer.x++;
    }
    console.log(`The player has position: x=${thePlayer.x}, y=${thePlayer.y}`);
    let newPosition = {x: thePlayer.x, y: thePlayer.y};
    thePlayer.path.push(newPosition);
  } else {
    console.log("Youu cant place player outside of the board!")
  }
}

function command(thePlayer, orders){
  for (let i = 0; i< orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l":
        placeHorizontal(thePlayer, order);
        break;
      case "r":
        placeHorizontal(thePlayer, order);
        break;
      case "u":
        placeVertical(thePlayer, order);
        break;
      case "d":
        placeVertical(thePlayer, order);
        break;
    }
  }
  console.log(thePlayer.path);
}
command(player, "lurrddu");*/

/*12-FUNCTIONS!!!

let property = {
  owner: {
    firstName: "John",
    lastName: "Doe",
    age: 44
  },
  isForSale: true,
  sqrm: 120,
  address: {
    street: "Happy St",
    number: 123,
    city: "Miami",
    state: "FL",
    country: "US"
  },
  amenities: ["pool", "tennis court", "private parking",
  "yard"]
}

function checkProperty(someProperty) {
  if (someProperty.isForSale === true) {
    console.log(`The owner, ${someProperty.owner.firstName} ${someProperty.owner.lastName} put the home for sale! The property has ${someProperty.amenities.length} amenities...`);
  } else {
    console.log(`The home in ${someProperty.address.street} ${someProperty.address.number} is not for sale`);
  }
}

property.isForSale = false;

checkProperty(property);
*/

/*The output: if the property isForSale equals to true,
the expected output to the console should be:
The owner, John Doe put the home for sale!
The property has 4 amenities.. In the other case,
we should see the following: The home in Happy St no.
123 is not for sale.
*/


/* 11-FUNCTIONS!!!
Define a function getCredentials() that will receive 
the following object as argument and print the 
following result:

let user = {
  username: "ironhacker",
  password: "123iron345"
}
let user2 = {
  username: "ironhacsdsker",
  password: "123isdsdron345"
}

function getCredentials(anyUser) {
  console.log(`Username is: ${anyUser.username} and the password is: ${anyUser.password}`);
}

getCredentials(user);

//al pasar un argumento como anyUser, se puede
//poner cualquiera
// => expected output:
// Username is: ironhacker and the password is: 123iron345.
*/

/*10-FUNCTIONS!!!
const arrAnimalites = ["perrite", "gatite", true, 
47, 63, false, {name: "meme"}]
arrAnimalites.forEach( elem => {
  let theType = typeof elem;
  console.log(`The variable ${elem} is type of ${theType}.`)}
  );
  */

/*9- FUNCTIONS!!!
Define a function that will:
count from 1 to 100,
on numbers divisible with 4 print “Hey”,
on numbers divisible with 6 print “There”,
on numbers divisible with both 4 and 6 print “Ironhack”,
skip numbers divisible with 7,
on the number that represents your age add ! (ex. 34!).

function fizzBuzz() {
for (let i = 0; i <= 100; i++) {
  if (i%4 === 0){
    console.log("Hey!");
  } if (i%6 === 0) {
    console.log("There");
  } if (i%4 === 0 && i%6 === 0) {
    console.log("Ironhack");
  } if (i%7 === 0){
    continue;
  } if (i === 24){
    console.log(i + "!");
  }
}
}
fizzBuzz();
*/

/*8- FUNCTIONS!!!
let arr = [];
function stringToLetters(letter) {
  for (let i = 0; i < letter.length; i++) {
    arr.push(letter[i]);
  }
  console.log(arr);
}
stringToLetters("hello");
*/

/*7- FUNCTIONSS!!!
Define a function that will receive an array as an
argument and calculate a sum of all its elements. 
Example, if we pass the following array to that function: 
const prices = [5, 7.99, 9.99, 0.99, 21], it should 
return 44.97 as output. How would you concatenate $ 
sign in front of the sum?

const prices = [5, 7.99, 9.99, 0.99, 21];
let sum = 0;
function sumOfPrices(prices) {
  for (let i = 0; i<prices.length; i++) {
    sum += prices[i];
  }
  console.log(`$  ${sum}`)
}
sumOfPrices(prices);
*/

/*6- FUNCTIONSS!!!
let favCities = ["Amsterdam", "Barcelona", "Berlin", 
"Lisbon", "Madrid", "Mexico City", "Miami", 
"Paris", "Sao Paulo"];

function printEvens(favCities) {
  for (let i=0; i<favCities.length; i++){
    if((i%2) === 0) {
    console.log(favCities[i]);
  }
}
}
printEvens(favCities);
*/

/*5- FUNCTIONSS!!!
//let favCities = ["Rio de Janeiro", "Buenos Aires", 
//"Paris", "Ibiza", "Barcelona"];

function printFavCities (favCities) {
for (let i=0; i<favCities.length; i++){
console.log(favCities[i]);
}
}
printFavCities(favCities);
----------
let favFood = ["Pasta", "Beyond Burguer", 
"Quesito Vegano", "Banana Vegan Pancakes", "Vermouth"];

function printFavFood (favFood) {
for (let i=0; i<favFood.length; i++){
console.log(favFood[i]);
}
}
printFavFood(favFood);
*/
/*4- FUNCTIONSS!!!

function printArrElements(ironCities) {
  for (let i=0; i<ironCities.length; i++){
  console.log(ironCities[i]);
}
}
printArrElements(["Amsterdam", "Barcelona", "Berlin", 
"Lisbon", "Madrid", "Mexico City", "Miami", 
"Paris", "Sao Paulo"]);
*/

/*3- FUNCTIONSS!!!
Define a function printNumbers() that receives one
argument and prints the numbers from 0 to
whatever number we pass to it as an argument

function printNumbers(number) {
  for(let i = 0; i<=number; i++) {
    console.log(i);
  }
}
printNumbers(16);
*/

/*2- FUNCTIONSS!!!
Define a function printToTwenty() that will print 
the numbers from 0 to 20 to the console 
(don’t forget we have to invoke/call the function 
to see it working )

function printToTwenty() {
  for (let i = 0; i <= 20; i++){
    console.log(i);
  }
}
printToTwenty();*/

/*1- FUNCTIONSS!!!
function welcome(name) {
  console.log(`Hello ${name}`);
}
welcome("Sofia");
*/

/* 5- OBJECTS Y ARRAYSS
let basic = {
  language: "JavaScript",
  frameworks: [
    {
      end: "back",
      list: [
        {
          name: "ExpressJS",
          released: 2010
        },
        {
          name: "MeteorJS",
          released: 2012
        }
      ]
    },
    {
      end: "front",
      list: [
        {
          name: "ReactJS",
          released: 2013
        },
        {
          name: "VueJS",
          released: 2014
        }
      ]
    }
  ]
};
console.log(basic.frameworks[0].list[0].name); // => ExpressJS
console.log("In Ironhack, I'll learn " + basic.frameworks[0].list[0].name + " and " + basic.frameworks[1].list[0].name ); // => In Ironhack, I'll learn ExpressJS and ReactJS.

*/

/*4- OBJECTS Y ARRAYSS
Given a 2D array, print the following:
const ironCampuses = [
  ["Mexico City", "Miami", "Sao Paulo"],
  ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
];

console.log(ironCampuses[0][1]); // => Miami
console.log(ironCampuses[1][0]); // => Amsterdam
console.log(ironCampuses[1][5]); // => Paris
*/

/*3- OBJECTS Y ARRAYSS
Given the object with nested objects in it, print:
let student = {
  firstName: "Ana",
  lastName: "Blair",
  course: {
    name: "Web Development",
    type: "part-time"
  },
  attendedIn: "Madrid",
  address: {
    street: "Happy Street",
    number: 123,
    city: "Barcelona",
    zip: 08015,
    country: "Spain"
  }
};

console.log(student.course.name); // => Web Development
console.log(student.address.street); // => Happy Street
console.log(student.firstName + " moved from " + student.address.city + " to " + student.attendedIn + " to take " + student.course.type + " " + student.course.name + " course.");
// => Ana moved from Barcelona to Madrid to take part-time Web Development course.
*/

/*2- OBJECTS Y ARRAYSS
Given the array, print:
your course type (full-time or part-time)
the most familiar topic
the least familiar topic
let course = {
  name: "Web Development",
  type: ["full-time", "part-time"],
  topics: ["HTML/CSS & Responsive Design", "JavaScript", "MongoDB", "Node", "Express", "React"]
};
console.log(course.type[0]);
console.log(course.topics[1]);
console.log(course.topics[2]);
*/

/*1- OBJECTS Y ARRAYS!!
Using the given array of objects:
display price of iPhone,
display both phones’ names,
add a new phone at the beginning of the array,
remove the last element of the array

let products = [
  {
      name: "iPhone",
      price: 799.99
  },
  {
      name: "Samsung Galaxy S10",
      price: 900.00
  }
]
let newProduct = {
name: "Xiaomi",
price: 560
};
products.unshift(newProduct);
products.pop(products[0]);
console.log(products);
console.log(products[0].price);
console.log(products[0].name);
console.log(products[1].name);
*/

/*2-OBJECTS
Find the value of the price property and if it
is greater than 100, discount it by 10%.
If that’s not the case, discount it by 7%.
Update the object with :

the new property - discount and the
corresponding value (7% or 10%) and
the new price. 

let product = {
    name: "headphones",
    price: 100
};
product.discount = "";

if (product.price > 100){
  product.discount = "10%" ;
  product.updatedPrice = product.price - (product.price * 0.1);
} else if (product.price <= 100) {
  product.discount = "7%";
  product.updatedPrice = product.price - (product.price * 0.07);
}
console.log("Updated product:", product);
//---------------------------------------
1- OBJECTS! SEGUNDA PARTE 
let produc = {
  name: "headphones",
  price: 77.7,
  //discount: "7%"
};
for (let key in produc) {
  if (key === "discount") {
    console.log("Already discounted by ", produc.discount);
  } else if (produc.price > 100) {
    produc.discount = "10%";
    produc.price = produc.price - (produc.price * 0.1);
  } else if (produc.price <= 100){
    produc.discount = "7%";
    produc.price = produc.price - (produc.price * 0.07);
  }
  console.log(produc);
}
*/


/*1- OBJECTSlet student = {
  name: "Max",
  age: 27
};
console.log(student.name)*/

/*4- ARRAYS REVISAR!!!!!!!!!!
Given array of numbers, calculate the sum:
 // start value for the sum 
 const prices = [10.99, 44.56, 112.79, 3, 5];
  let sum = 0;
 for (let i = 0; i < prices.length; i++){
  sum += prices[i];
} 
console.log(sum.toFixed());
*/

/*3- ARRAYS (check how can i make it with for o forEach)
Check if the word appears in given 
array and print out if it does or doesn’t:

let word = "miami";
let arr = ["bcn", "mia", "sao", "mex", "par",
"miami", "ams", "ber", "paris", "lis", "mad"];
if (arr.includes(word)) {
  console.log(word);
} else {
  console.log("does not include")
}
  */

/*2- ARRAYS
Create an array with 6 of your favorite foods. 
With the loop of your choice,
iterate through the array,
but only print out the foods with an even index.

const favoriteFoods = ["soup", "fajitas", "pastel de papa", "arrocito de milton",
"guiso de lentejas de Milton", "melanzzane parmigiana"];
for (let i = 0; i < favoriteFoods.length; i++){
  if (i % 2 === 0){
    console.log(favoriteFoods[i]);
  }
}*/

/*1- ARRAYS
const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`);
animalArray.push("cow");
console.log(`After: ${animalArray}`); */

/*3- LOOPS AND ITERATIONS
for (let i = 1; i<= 50; i++){
  if (i % 5 === 0){
    continue;
  } else if (i % 10 === 0 || i % 5 === 0) {
    console.log("Donkey");
  } else if (i % 2 !== 0 && (i - 1) % 10 === 0) {
    console.log("Monkey")
  }
    else {
      console.log(i)
    }
  } 
 */

/*2- LOOPS AND ITERATIONS
for (let i = 10; i > 0; i--){
  console.log(i);
}*/


/* 1- LOOPS AND ITERATIONS
while (counter >= 0){
  console.log(counter);
  counter --;
} */

/*4- BOOLEANS AND CONDITIONAL STATEMENTS
let year = "250";
if (year.length === 1 || year.length === 2){
  console.log("1")
} else if (year.length === 3 && year[0] === "1") {
console.log("2")
} else if (year.length === 3 && year[0] === "2") {
console.log("3")
}
else {
  console.log("undefined")
}
O SINO TAMBIÉN
let years = '1587';
let siglos = years[0];
let siglos2 = (parseInt(siglos, 10) +1);

if (years.length > 3) {
    console.log(siglos + (parseInt(years.charAt(1), 10) +1));
} else if(years.length <= 2){
    console.log("1");
} 
else {
    console.log(siglos2);
}
*/

/*3- BOOLEANS AND CONDITIONAL STATEMENTS
let num = 219;
if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
Given the number, print if the number is odd or even:*/

/*2- BOOLEANS AND CONDITIONAL STATEMENTS
let word = "web";
let sentence = "I enrolled Ironhack because I love web development.";
Given the word, check if it exists in the
given sentence and print out if it does or it doesn’t

if (sentence.includes(word)){
  console.log("includes");
} else {
  console.log("does not include");
}*/

/* 1- BOOELANS AND CONDITIONAL STATEMENTS
let wordUno = "";
let wordDos = "";
if (wordUno.length < wordDos.length) {
  console.log(wordDos);
} else if (wordUno.length > wordDos.length) {
console.log(wordUno);
} else if (wordDos.length = wordUno.length) {
  console.log(wordUno, wordDos);
} else {
  console.log("kcsho")
}
*/

/*ULTIMO EJERCICIO STRINGS:
let type = "fruit";
switch (type) {
  case "pear":
    case "apple":
    console.log("pome")
    break;
  case "peach":
  case "coconut":
    console.log("drupe")
    break;
  case "strawberry":
  case"blueberry":
  case"blackberry":
    console.log("berry")
    break;
    default:
    console.log("other")
    break;
}
*/

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

/*The output: if the property isForSale equals to true,
the expected output to the console should be:
The owner, John Doe put the home for sale!
The property has 4 amenities.. In the other case,
we should see the following: The home in Happy St no.
123 is not for sale.
*/


//11-FUNCTIONS!!!
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


//10-FUNCTIONS!!!
const arrAnimalites = ["perrite", "gatite", true, 
47, 63, false, {name: "meme"}]
arrAnimalites.forEach( elem => {
  let theType = typeof elem;
  console.log(`The variable ${elem} is type of ${theType}.`)}
  );

//9- FUNCTIONS!!!
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


//8- FUNCTIONS!!
let arr = [];
function stringToLetters(letter) {
  for (let i = 0; i < letter.length; i++) {
    arr.push(letter[i]);
  }
  console.log(arr);
}
stringToLetters("hello");
*/

//7- FUNCTIONSS!!!
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


//6- FUNCTIONSS!!!
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


//5- FUNCTIONSS!!!
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

//- FUNCTIONSS!!!

function printArrElements(ironCities) {
  for (let i=0; i<ironCities.length; i++){
  console.log(ironCities[i]);
}
}
printArrElements(["Amsterdam", "Barcelona", "Berlin", 
"Lisbon", "Madrid", "Mexico City", "Miami", 
"Paris", "Sao Paulo"]);
*/

//- FUNCTIONSS!!!
Define a function printNumbers() that receives one
argument and prints the numbers from 0 to
whatever number we pass to it as an argument

function printNumbers(number) {
  for(let i = 0; i<=number; i++) {
    console.log(i);
  }
}
printNumbers(16);


//- FUNCTIONSS!!!
Define a function printToTwenty() that will print 
the numbers from 0 to 20 to the console 
(don’t forget we have to invoke/call the function 
to see it working )

function printToTwenty() {
  for (let i = 0; i <= 20; i++){
    console.log(i);
  }
}
printToTwenty();

//1- FUNCTIONSS!!!
function welcome(name) {
  console.log(`Hello ${name}`);
}
welcome("Sofia");
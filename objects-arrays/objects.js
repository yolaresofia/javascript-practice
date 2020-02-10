//5-OBJECTS Y ARRAYSS
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



//4- OBJECTS Y ARRAYSS
//Given a 2D array, print the following:

const ironCampuses = [
  ["Mexico City", "Miami", "Sao Paulo"],
  ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
];

console.log(ironCampuses[0][1]); // => Miami
console.log(ironCampuses[1][0]); // => Amsterdam
console.log(ironCampuses[1][5]); // => Paris

//3- OBJECTS Y ARRAYSS
//Given the object with nested objects in it, print:

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


//2- OBJECTS Y ARRAYSS
/*Given the array, print:
your course type (full-time or part-time)
the most familiar topic
the least familiar topic*/

let course = {
  name: "Web Development",
  type: ["full-time", "part-time"],
  topics: ["HTML/CSS & Responsive Design", "JavaScript", "MongoDB", "Node", "Express", "React"]
};
console.log(course.type[0]);
console.log(course.topics[1]);
console.log(course.topics[2]);


//1- OBJECTS Y ARRAYS!!
//Using the given array of objects:
//display price of iPhone,
//display both phones’ names,
//add a new phone at the beginning of the array,
//remove the last element of the array

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


//2-OBJECTS
//Find the value of the price property and if it
//is greater than 100, discount it by 10%.
//If that’s not the case, discount it by 7%.
//Update the object with :
//the new property - discount and the
//corresponding value (7% or 10%) and
//the new price. 

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
//1- OBJECTS! SEGUNDA PARTE 
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



//1- OBJECTSlet student = {
  name: "Max",
  age: 27
}

console.log(student.name);

//4- ARRAYS REVISAR!!!!!!!!!!
//Given array of numbers, calculate the sum:
 // start value for the sum 
 const prices = [10.99, 44.56, 112.79, 3, 5];
  let sum = 0;
 for (let i = 0; i < prices.length; i++){
  sum += prices[i];
} 
console.log(sum.toFixed());


//3- ARRAYS (check how can i make it with for o forEach)
/*Check if the word appears in given 
array and print out if it does or doesn’t:*/

let word = "miami";
let arr = ["bcn", "mia", "sao", "mex", "par",
"miami", "ams", "ber", "paris", "lis", "mad"];
if (arr.includes(word)) {
  console.log(word);
} else {
  console.log("does not include")
}

//2- ARRAYS
/*Create an array with 6 of your favorite foods. 
With the loop of your choice,
iterate through the array,
but only print out the foods with an even index.*/

const favoriteFoods = ["soup", "fajitas", "pastel de papa", "arrocito de milton",
"guiso de lentejas de Milton", "melanzzane parmigiana"];
for (let i = 0; i < favoriteFoods.length; i++){
  if (i % 2 === 0){
    console.log(favoriteFoods[i]);
  }
}

//1- ARRAYS
const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`);
animalArray.push("cow");
console.log(`After: ${animalArray}`); */

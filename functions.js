//.sort function based on length of strings 

var names = ["Jimmy John", "Bill", "Mr Krabs", "Spongebob Squarepants"];


function compare(a, b){
    return b.length - a.length;
}

console.log(names.sort(compare) );


//longest name in an array of objects, also sorted alphabetically

var myArrayOfObjects = [
    { name: "Bob", email: "bob@email.com"},
    { name: "Jillfdsfs", email: "yack@email.com"},
    { name: "Harrygfdgfsdgf", email: "harry@email.com"}
];

function lengthOfName(a, b){
    return b.name.length - a.name.length;
}

console.log(myArrayOfObjects.sort(lengthOfName) );

function alpha (a, b){
    if (a.email < b.email){
        return -1;
    }
    if (a.email > b.email){ 
        return 1;
    }
    return 0
}

console.log(myArrayOfObjects.sort(alpha) );

//Using array.prototype.map to find the square of an array

var myArrayOfNumbers = [2, 4, 6];

function roots(a) {
     return a * a
}

console.log(myArrayOfNumbers.map(roots) );

//Using an array.prototype.map to return the square of a "num" property on an object

var myObjects = [
    { id: 63, name: "Bob", email: "bob@email.com"},
    { id: 34, name: "Jillfdsfs", email: "yack@email.com"},
    { id: 17, name: "Harrygfdgfsdgf", email: "harry@email.com"}
];

function squareId(theId) {
     return theId.id * theId.id;
}
console.log(myObjects.map(function(theId){
    return squareId(theId);
    }
    )
    );

//Creating a function to return a function

function operationMaker(operation) {
   if (operation == "add") {
       return function add(a, b){
           return a + b;
       }
   }
   if(operation == "sub") {
       return function sub(a, b){
           return a - b;
       }
   }
   if(operation == "mult") {
       return function mult(a, b){
           return a * b;
       }
   }
   if(operation == "div") {
       return function div(a, b) {
           return a / b;
       }
   }
}

var adder = operationMaker("add");
var sum = adder(5, 10);
console.log(sum);

var mult = operationMaker("mult");
var product = mult(5, 10);
console.log(product);


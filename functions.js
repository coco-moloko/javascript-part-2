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

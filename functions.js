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

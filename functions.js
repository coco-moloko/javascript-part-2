//.sort function based on length of strings 

var names = ["Jimmy John", "Bill", "Mr Krabs", "Spongebob Squarepants"];


function compare(a, b){
    return b.length - a.length;
}

console.log(names.sort(compare) );


//longest name in an array of objects


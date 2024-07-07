// TUPLE IN TYPESCRIPT 

// it is a specualt type beacuse it is not present in javascript 
// and allow use to  set up array with ficed length and ordered and fixed type 

// useful when we want group siffernt type of values together 

// the [ string , number ] is working because we have seen that [] mean array of size 0 
let person : [ string , number ] =[ 'John' , 23 ] 
// we have set fixed length + the fixed type 

// there is a gotcha 
let date : [number , number , number ] = [12,17,2024] ;

function getPerson():[string , number ]{
    return ['john'  , 22 ] ; 
}

let randomPerson = getPerson( ) ; 
console.log( randomPerson)   ;

// randomPerson.push("hi")  // allowed this 
// there is a peiblem 
date.push(1);date.push(1);date.push(1);date.push(1);date.push(1);date.push(1);
console.log(date);

// if we do data : readonly [number , number ] = [ 1, 2 ]
// in this case we can not push or pop 


let susan : [ string , number?] = [ "name "] ;   
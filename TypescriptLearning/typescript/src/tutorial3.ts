// OBJECTS IN TYPESCRIPT 

let car : { brand : string ;  year : number  } = { brand : 'toyota' , year : 2020 } ; 
// this is an error 
// let car : { brand : string ;  year : number  } = { brand : 'toyota' , year : 2020 ,color : 'blue' } ;

car.brand= 'ford' ; 
// now the car : {} is super clunky, this is just basic ,
//  this is what happens under the hood 

let car1: {  brand : string ;  year : number   } = { brand : "ferrrai"  , year : 2022 }
// whatever we set up in the type the anootation need to match  , otherwise typecrit not allow to compile  
// NOTE THAT AFTE GIVING THE TYPE IT IS NECESSAR TO provide all the oter types or just give options 

let book = { title : "book" , cost : 20 } ; 
let pen = { title : 'pen' , cost : 10 } ; 
let notebook = { title : 'notebook'} ; 


let items : { readonly title : string; cost? : number  }[] = [ book, pen, notebook ] ;  

// cann ot chane he valueoof the titke 
items.push( notebook)

// then why it is giving error 
// let car : { brand : string ;  year : number  } = { brand : 'toyota' , year : 2020 ,color : 'blue' } 
// but same object inside the array will not give an error 

// THE MAIN REASON IS THAT REFERNCING AN OBJECT IN PLAC OF DORECTLY USING OBJECT 
// TYPESCRIPT ALLOW EXTRA PARAMETERS S IT ASSUMES THAT THE OBJECT IS USSD IN SOME OTHER CAESS ALSO 
 


// The error in your code is occurring because TypeScript uses structural typing, 
// which means it allows an object to be assigned to a type as long as the object
//  contains at least the required properties of that type.]
//  However, this rule does. not apply to variable declarations with a specific object type.

// When you declare a variable with a specific type, TypeScript expects the object 
// to match that type exactly without any additional properties. Let's break down the error:

// ## CHALLEMGE 
let bike  :{ brand : string  ; year : number }= {brand : 'yamaha' , year   : 2010 }; 
// bike.year = "old" -> it will give an error 
let laptop  :{ brand : string  ; year : number }= {brand : 'DELL' , year   : 2010 }; 

// let laptop2  :{ brand : string  ; year : number }= {brand : 'DELL' }; // again it will gove an error 

let product1  = { title : 'shirt' , price : 20 } ; 
// now the  product1 has the given types fixed, jist as in the case o fnoamal varible declartion 
let product2 = { title : 'shirt'  } ; 
// now the  product2 also has the given types fixed, jist as in the case o fnoamal varible declartion 

// SEE, WHEN THE ARRAY of object is used unlike object , IN THAT CASE ONLY THE given TYPES ARE REQUIRED 
// ETRA TYPES IN ARRAY OF OBJECT WILL NOT GVE ANY ERROR 

let products  : { title : string ;  price?: number  }[]=  [ product1 , product2]  

// products.push({}) ; // will again givr an errro 
// union in typescript 
// either number or string 
let tax : number | string =  10   ;

tax = 100 ; 
tax = "510" ; 

let requestStatus : 'pending' | 'success' | 'error' = 'pending' ; 
// I will be gettign the col suggestions 
requestStatus = 'success' ;
// giving other value will give me error 


// type any allow us to have any type , 
let notsure :any  = 4 ; 
// any means can set to function, boolean, string or whatever 
notsure = 'may be a string ' ; 

// as far as karl's sugeestoin, be careful in using any at all , it can spread like WILDFIRE  

// using any at one place, then we having any at many places 
// there have tp be good reason t use any 


let random ; 
// now the random is of type any 
random = 4 ; 
random = " value " ; 

// so be careful it useful if want ot test something 
// big codebase and want to slowly introduce typescript 
// be very mindful using any , looses the sense to use typescript 
const books = ['a' , 'b' , 'c'] ; 
let foundBook  : string  | undefined ; 
// even if i remve both of them o=and do not prvide the type, in that case by any it will take care 
for( let ele of books ){
    if( ele === '0a'){
        foundBook = ele   ;
        foundBook = foundBook.toUpperCase(); 
        
    }
}

// foundBook = 10 ;
// I do not want this, if foudnBook os 10 , then anyone can send I want it to string and want typescipt 
// to stop it 

// now After gifing type if I try to console.log it will give me an error 

// what is the value to give as it is possible no value is asigneed bacise of the if condion so need to give some 
// default value with help of union 

// undefined is basiclly a placholder, until the arible get some other value 
// in place of undefined null , string value or any other type of value  not allwed as I have to give it the valeu , or assign it 
console.log( foundBook?.charAt(0))  ;

// as undefined, so ooptional chaining come and I got a question mark 


// ## CHALLENGE 

let discount : number | string = 20  ; 
discount ="20%" ; 
console.log(discount.toUpperCase() ) 

let orderStatus : 'processing' | 'shipped' | 'delivered'  = 'shipped' ; 
orderStatus = 'shipped'  ; 
// orderStatus = 'cancelled'
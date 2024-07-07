// ARRAY IN TYPESCRIPT 

let prices : number[]= [ 100, 75, 42   ] ; 
// prices.push( "hello") -> shouts for error 


// empty square bracket not allowed 
// typescript assumes it to be empty array , can not have any other value , can not push anything
let arr : [] = [] ; 

// Type '[string]' is not assignable to type '[]'.
//   Source has 1 element(s) but target allows only 

let randomValues:[] = []
// ----------------------- --------------   --------------------  ----------------
let emptyValues = [] ; 
// now in this case, I have got the variale emptyValue with generic type ,any[] , can not assgin to string, should be array at least

let names = ['peter' , 'sushan']  ;
// the varible names automagically got the type with string[] 

//  if i do 
 let namess = ['peter' , 'sushan' , 1 ]  ;
//  let namess: (string | number)[]


let array : ( string | boolean )[]= ['apple' , true , 'orange' , false ] ; 


// ## CHALLENGE 

let temperature : number[] = [20,25,30] 
// temperature.push("hot") ; throws an error 

let colors : string[] = ['red' , 'green' , 'blue' ] ; 
//  colors.push( true )


let mixedArray : ( string |number )[] = [...temperature , ...colors ] ; 
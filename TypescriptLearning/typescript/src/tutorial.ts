// github : https://github.com/john-smilga/typescript-course/blob/main/01-typescript-tutorial/README.md
console.log("typescript tutorial ")  ;


let name:string = "shakeAndBake" ; 

// varibleName:type, when I set the varible nameI get 2 things out of the box 
// 1) never be somthing else 
// 2) there ae mthods assiscitaed with the typees , superawsome 
name = name.toUpperCase() ; 
console.log( name ) ; 

// name = 20 -> throw error 

let amount : number = 20 ;
amount = amount - 1 ; 
// ampunt = 'pants', it will give error 

let isAwesome:boolean = true ; 
isAwesome = false ; 


// isAwesome = 'shakeandbake' , again it will  give me error 

// Typescript is smart and can infoer type of varible depend on the value passed, we can remove the type annotations and still get 
// all the goodies 

let x = 123 ; 
// gettign ype based on the value is superawrsome , no need to go every varible and just make sure the type is set 
// there are some questions we need to take care of and don't dismiss type annotations 


// ## CHALLENGE 

let sringVar : string  = "Decostar" ; 
sringVar = sringVar.toLocaleUpperCase() ; 
console.log( sringVar)

let booleanVar : boolean = sringVar === 'deco' ; 
console.log( booleanVar) ;
// error , it will throw 
// booleanVar = 10 ; 
// sringVar = 3; 
// booleanVar = 4 ;
console.log( sringVar , booleanVar )

// on  doing the above things, we will be gettign the error, but still the project works 
// getting typescript error, project willl work locally  with errors but on hosting we need to build it 
// to build it,we have to pass the typescript check , if we build with typescriot error , we will fail 


// src/tutorial.ts:40:1 - error TS2322: Type 'number' is not assignable to type 'string'.

// 40 sringVar = 3;
//    ~~~~~~~~

// src/tutorial.ts:41:1 - error TS2322: Type 'number' is not assignable to type 'boolean'.

// 41 booleanVar = 4 ;
//    ~~~~~~~~~~


// --------      -------------       ---------------          -----------------            -------------- 

// Found 4 errors in the same file, starting at: src/tutorial.ts:17


// COMMENT THE ERROR OR DELETE WAHTEVER, GET FREE O THEM 

// locally even with typescript error, we will be able o run the project 
// however issues when deploying orbuildign the prdcution ready application 


//



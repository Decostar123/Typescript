// TYPEGUARD OPTIONS AVAILABLE 

// Type guarding is a term in javascript taht refers to the ability to narrow down the type an object
// within a certain scope. This is usualyy done using condiotal statement that chceks the type of object 


// in the context of ts, type guard is some expression that performs a runtime check that guarentee the type in some scope 

// ## 1) CHALLENEG typeof guard 
type ValueType = string | number | boolean ; 
let value  : ValueType ; 

// undefined is leypwrd whihc acts like placehlder begore a varible get's a value 
// console.log(value);

// console.log(" the value us being printed here ");
 

function checkValue( param1 : ValueType){

    // let datatype = typeof( param1 ) ; 
    if( typeof( param1 )  === 'string'){
        console.log( param1.toUpperCase());
    
    }else if(  typeof( param1 ) === 'number'){
        console.log( param1.toFixed(2));
        
    }else{
        console.log("boolean : " + param1);
        
    }
}
for( let i =0 ;i <=6 ;i++)
    {
            
    const random = Math.random() ; 
    value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true ;
    checkValue(value)
    }



//  ## 2)  CHALLENEG -- Equality Narrowing , ( do not be scared of the fancy name )  
// In Typescript, equlaity narrowing is form of type narrowing that occurs when you use equality 
// checks like === or !== in your code 

type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };

type Animal = Dog | Cat ; 
function makeSound( param1 : Animal){

    // SEE WE HAVE NARROWED, DOWN ALL THE METHODS WHICH WERE AVAILABLE 
    if( param1.type === 'dog' ){
            console.log( param1.bark())
    }else{
        console.log( param1.meow())
    }
}

function makeSound1( param1 : Animal){
    if( 'bark' in param1 ){
        param1.bark() ; 
    }else{
        param1.meow() ;
    }
}


// ## 3) CHALLENGE - TRUTHY OR FALSY GUARD 

// it is  a simple check for the truthy or the faly value 


function printLength( str : string | null | undefined ){
    if( str){
        console.log(str.length);
        
    }else{
        console.log("No string provided ");
        
    }
}


// ## 4) CHALLENGE , instanceof 
// In JavaScript, the instanceof operator is used to check if an object is an instance 
// of a particular class or constructor function. It returns true if the object is an instance,
//  otherwise it returns false.


try {
    throw  new Error("oops !! an error ") ; 

} catch (error) {
    // the type of error is unknown which means we have to do type checking before we can 
    // run any other method, unlike any part 
    if( error instanceof Error){
        console.log(error.message , error.name );
    }else{
        console.log(" threr is an error ....");
        
    }
}
function  checkInput( input : Date | String){
    if( input instanceof Date){
        
    console.log(input.getFullYear() , input.getDate() ,  input.getMonth() , input.toDateString() );
    
        return input.getFullYear().toString()
    }
    return input ; 
}

const year = checkInput( new Date()) ; 
console.log( year );

// ## 5) CHALLENGE - type Predicate 

// A type predicate is a function whose return type is a special kind of type that can be used to 
// narrow down types withing conditional blocks 


type Student = { 
    name : string ; 
    study : ()=> void ; 
}

type User = { 
    name : string ; 
    login : ()=> void ; 
}

type  Person = Student | User ; 

const rabdomPerson = ():Person =>{
    return Math.random() < 0.5 ? 
    {
        name :'John' , study :()=> console.log("Studying in ")
        
    }:{
        name : 'John' , login :()=>console.log( "Logging in" )
        
    }
}
console.log(rabdomPerson());




// ## 6) CHALLENGE - DISCRIMINATED UNIONS AND EXHAUSTIVE CHECKS USING THE 'NEVER TYPE' 

// A discriminated union in Typescript is a type that can be one of several different types each, 
// identified by a unique literal property ( the discriminator) that allow for type safe handling for each 
// possible variant 

type IncrementAction = {
    type: 'increment';
    amount: number;
    timestamp: number;
    user: string;
  };
  
  type DecrementAction = {
    type: 'decrement';
    amount: number;
    timestamp: number;
    user: string;
  };
  
  type Action = IncrementAction | DecrementAction;


//   we can not use typeof, instanceof , in -> here , preety much all are same though ,
//  all the three are used in differnct cases LOL, serving the same purpose 
// to disciminate the types 
  function reducer(state: number, action: Action): number {
    switch (action.type) {
      case 'increment':
        return state + action.amount;
      case 'decrement':
        return state - action.amount;
      default:
        // all the possible types or cases have ben checked and covered tha's why 
        const unexpectedAction: never = action;

        throw new Error(`Unexpected action: ${unexpectedAction}`);
    }
  }

//  we are not running the code, we are mostly focusing on the logical over here 
// here we set up dicrimated union and exhaustive check using never type in typescript 

  const newState = reducer(15, {
    user: 'john',
    type: 'increment',
    amount: 5,
    timestamp: 123456,
  });




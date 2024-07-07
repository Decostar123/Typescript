// UNKOWN TYPE , NEVER TYPE 
// just like type any we can have any vakue to type unknwn 

// The unknown type in typescript is a type-safe counterpart of any type. It's like saying that a 
// varible could be anything , but we need to do some type checking before we can use it 

let unknownValue : unknown ; 
unknownValue = 'hello world' ; 
unknownValue = [1,2,3 ] ; 
unknownValue = 32.3333 ; 
// unknownValue  = unknownValue.toFixed( 2) , the type is unknown , how can i know it is number and I can run this 
if( typeof(unknownValue) === 'number'){
    console.log( unknownValue.toFixed(0))
}

// one place where we see unknow value is try atch block 
try{

    let randomValue  = Math.random()  ; 
    if( randomValue < 0.5 ){
        throw "goch error " ;
         
    }
    else{
        throw new Error("there was an error ") ;

    }


}catch( error ){
    // 'error' is of type 'unknown'.ts(18046)

    if( error instanceof Error ) {
        console.log( error.message )
    }else{
        console.log( error ) ; 
    }
}





// The "unknown" type in TypeScript is a safer alternative to the "any" type. It represents any value,
// but unlike "any," it requires explicit type checking before you can perform operations on it.
//  This ensures that you handle the value properly and reduces the chances of runtime errors.

// Key Points About "unknown" Type:
// Safer than any:

// unknown is a type-safe version of any.
// You cannot perform any operations on a value of type unknown without first performing a type check.
// Explicit Type Checking Required:

// You must narrow down the type using type assertions, type guards, or other forms of type checking before you can use it.
// Example Usage:
// typescript
// Copy code
// let value: unknown;

// value = 42;
// value = "Hello";
// value = true;

// // You can't directly perform operations on 'value' because its type is 'unknown'
// // console.log(value.length); // Error: Object is of type 'unknown'

// // Type checking is required before you can use the value
// if (typeof value === "string") {
//     console.log(value.length); // Now it's safe to access 'length'
// }

// if (typeof value === "number") {
//     console.log(value.toFixed(2)); // Now it's safe to call 'toFixed'
// }
// Benefits of Using unknown:
// Type Safety: Ensures that you handle different types of values correctly and avoid runtime errors.
// Better Documentation: Indicates that a value can be anything, but you need to perform type checking before using it.
// Reduced Bugs: Forces you to think about the possible types a value can have and handle each case appropriately.
// When to Use unknown:
// When you expect a value to be of any type, but you want to enforce type safety.
// When dealing with external data (e.g., data from an API) where the type is not known beforehand.
// In summary, unknown is a powerful type in TypeScript that enhances type safety and helps prevent bugs by requiring explicit type checks before performing operations on values.









// --------------------   ---------------------------------------------------   ----------------------- 


// TYPE NEVER 

// let someValue : never = 0  ; // this will always give an error , first thing 

// may get tyype never in our cde if we set up one two many conditins 

type Theme = 'light' | 'dark' ;

function checkTheme( theme : Theme ) : void{
    if( theme === 'light'){
        console.log("light theme");
        return ;         
    }

    if( theme === 'dark'){
        console.log("dark theme ") ; 
        return  ; 
        
    }
    console.log(theme );
    // here theme is of type never because we have handles all of the possible cases 
    // at this point of time there is no possible for the theme 
    // if we encounter such scenario, we have to go back and look orignal value and all the condtions 
    // somewhere the things are going south, if we are at point of nevr 
    
}

enum Color{
    red , 
    blue , 
    green
}

function getColorName( color : Color ){
   
    switch( color){
        case Color.red :
            return 'red ======' ;
        case Color.blue :
            return 'blue'
        case Color.green:
            return "green"
        default :
            // at build time 

//             Type 'Color' is not assignable to type 'never'.ts(2322)
//              'unexpectedColor' is declared but its value is never read
// as a vald color is remaining 

            let unexpectedColor : never = color ;
            console.log("hey buddt ")            
            throw new Error(" unexpected color "  )
            
    }



}


console.log( getColorName( Color.red ) ) ; 
console.log(getColorName( Color.blue)) ; 
console.log( getColorName( Color.green) ) // we are not handling this case 


const Susan = 'Susan' ; 
let Something = 'Something' ; 

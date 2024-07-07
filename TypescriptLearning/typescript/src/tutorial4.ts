    // FUNCTIONS IN TYPESCRIPT 

    // with functions we have to use typescript 

    // Parameter 'name' implicitly has an 'any' type.ts(7006)

    // - any 
    // - config , strcit to false in tsconfig 
    // - type  
function sayHi(name : string){

    console.log( "hhele there " + name  )
}

sayHi("deco")

// now function return value 

// function calculate(price: number): number
function calculate( price  : number ){
    return price *0.9  ;
}

const finalPrice = calculate( 100 ) ; 
console.log(finalPrice);

// WHY WE SET THE TYPS IS TYEPSCRIPT IS ALREADY INFERRNG TYPE ?
// 1) if i set return type number and do return that not match will give me an error , ggod practoce set ype 
// explicitly 
// 2) be careful with type any 


function calculates( price  : number ) : number{
    return price *0.9  ;
}



// f------- ------------------------------  - ------------------
function addThree( number:any){
    let otherNumber : number = 3 ; 
    return otherNumber + number ;    
}

const result = addThree( 3 ) ; 
// result.myMethod() // this is not giving any error beacus it is any and might be some funcion running as happens in normal JS

// in the briwser i willl get 
// tutorial4.ts:46 Uncaught TypeError: result.myMethod is not a function
//     at tutorial4.ts:46:8


// console.log( typeof result )
// NOTE THAT THE RETURN TYPE OF ADD THREE IS BASICALLY any , but hy 
// beacuse of the inncoent any in the parameters, it can ont understnd the type as itcan be string also 
// we think math opeartion  so it should be number 
// so it slowly tricle down and spread like wildfire 


// ## Challenge 

let namesArray : string[]  = [ 'ram' , 'lakshman' , 'hanuman' , 'krishan'] ; 

function checkIfNamePresent( arr : string[] , name : String ) : boolean{

    let ind : number  = arr.findIndex(( ele )=> ele === name ) ; 
    if( ind  ===-1 ) return false ; 
    return true  ; 
}

console.log( checkIfNamePresent(namesArray , "krishan")  ) ; 



//  OPTIONAL AND DEFAULT PARAMETERS IN TYPESCRIPT 

function calculatePrice( price : number , discount?: number ) : number {

    return price - (discount || 0 ) ; 
}

let priceAfterDiscount = calculatePrice( 100 , 20 )  ; 

// if the discount is optional, in that case i am getting error, as I have to give number 
// 'discount' is possibly 'undefined'.ts(18048)
// i have a math opearitno , where undefin not makes sense 

// A FUNCTION WITH OPTIONAL PARAMETERS MUST WORK WHEN THEY ARE NOT SUPPLIED 
// WE JUS NEED TO PROVIDE THE FALLBACK VALUE 

// this is about optional parameter not let us see default parameter 


function calculateScore( initialScore : number , penaltyPoints : number  = 0   ) : number {
    return initialScore - penaltyPoints ; 
}

let scoreAfterPenalty = calculateScore( 100 , 20 ) ; 
let scoreWithoutPenalty = calculateScore( 300 ) ;
 // we can use oprional parameter ordefault provider , w can use avascript for that 

//  IF OPTIONAL PRIVIDER NEED TO SET LOGIC, IF DEFAULT THEN ONT THAT CASE , USE WAHTEVER VALUE 




function sum(message:string , ...args:number[]): string {

    let ans  = args.reduce(( acc ,ele ) => acc + ele  , 0 ) ; 
    // acc and ele are already of type number, typescript is smart 
    // we can explicitl provide the type, but in general typescript is useful 

    return message + " " + ans 
}

let ans = sum('The total is :' , 1,2,3,4,5); 
console.log( ans )  ;   

// WHAT TO RETURN IF WE ARE NOT RETURNING ANYTHING FROM JAVACRIPT 

// :viud type function not return any thing 

function logMessage( msg : string ):void{
    console.log(  "function logMessage( msg : string )" , msg )
    // no retuen allowed, return will give error 
}

logMessage(" this is deco")

// ## CHALLENGE 
// how to figure out the parameter s sting or number ? I used typeof 
function processInput( param : string | number ){
    
    if( typeof(param) === 'string'){
        console.log( param.toUpperCase())
    }
    if( typeof( param) === 'number'){
        console.log(param*2)
    }
}

processInput('decostar') ; 
processInput( 4 ) ; 

// solution -> using typeguard , which is basically typeof 


function createStudent( student :{ id :number ; name : string}) : void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}`)
}

const newStudent =  { 
    id : 5  , 
    name : 'anna' , 
    email : "anna@mail.com"
}
// this is not gving error an email 
createStudent( newStudent ) ; 
// but tis object o nthe fly is giving error on email property 

createStudent( { id : 4 , name : 'deco' })
// this is intersting property  
// when we pass object property inline typescript expect to math the parameter exactly , f we add extra property 
// it will immediately complain 

// if we are referncign an object and there's an extra prperty the only thing tyepscriot care about 
// are the properties that are in the type notation 
// if there are 100 extra property only the given must bepresent or error 

// remembe this gotcha and we are good to go 

// REFERNCING AN OBJECT WILL ALLOW EXTRA PROPERTY 


// NICE, CHATGPT ANSWER 
// The error arises because of how TypeScript handles excess property checks when you directly pass an object literal to a function.
// Understanding Excess Property Checks
// In TypeScript, when you pass an object literal directly as an argument, TypeScript performs excess property checks.
//  This means it will check if the object literal has any properties that are not expected by the function's parameter type. 
// If there are any excess properties, TypeScript will throw an error.

// However, when you assign an object to a variable first and then pass that variable to the function,
//  TypeScript does not perform these excess property checks. 
// THIS IS BEACUSE TYPESCRIPT ASSUMES THAT THE OBJECT MIGHT BE USED INOTHER WAYS AND IT IS MORE LENINET IN THIS SCENARIO 

// TYPESCRIPT ID REALL VERY SMART !! 
function processData( param1 : string | number , param2 : { reverse : boolean } = { reverse : false } ) : string | number  {
// optional parameter as if i pass a number, then i do not care about the ptehr parameter param2 


    if( typeof(param1) === 'number'){
        return param1*2 ; 
    }else{
        let ans = param1.toUpperCase() ; 
        if( param2.reverse){
            ans = ans.split('').reverse().join('')  ;
        }
        return ans ; 
    } 
}
console.log(processData("decostar" , { reverse :true }));

// THE MAIN GOTCHA WAS DEUALT VALE after giving type give the default value 
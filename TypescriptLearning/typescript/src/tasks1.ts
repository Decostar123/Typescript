console.log("I am in the tasks ....");
const btn  =  document.querySelector(".test-btn") ;
// when we use qyery selector we get back  elements 
// ther a lot of potential for null 

// we can not build project if we not cover both of the cases 
// once we do it will be  smooth sailing 


// the button can be const btn: Element | null

// it will be issue if i try to access properties and methods only specific to button as it is an Element 
// plus it can be null 

// btn. // event listener not work , work if i put  ? 
// btn?. 
// this is at run time and there are chancse that the btn can be null 

btn?.addEventListener
// we can also do this
// every time we do something check is the btn exist
if( btn){

}

// other approach to deal with null issue is by setting non nnull assertion operator 

const btn2 = document.querySelector(".test-btn")! ; 
// hre i am telling typescrit i know a bit more about prject then you do, 
// i know for sure that the element is there

// If you are not completely sure that the element will always be present, it is safer to check for null:

// Using the non-null assertion operator can make your code cleaner, but it should be used judiciously to
//  avoid potential runtime issues.

// my option to use any one , optional chahing or null or ! 

// what if no I want to have the disabled method
// btn2.disabled // I am not able to get any methods, why ? 
// the reason is that, i am getting a general element not a button 

// elements only have properties and nmethods comman to all the elementd 

// so we need methods of the element which are only on that, like the button 

// i know it has disabled one i want to use but i cannnot use 


// in the goto type defination, I have 
// querySelector<E extends Element = Element>(selectors: string): E | null;

// note this limits elemnt to element and not only that, and return Elemnt or null 



const btn3 = document.querySelector<HTMLButtonElement>(".test-btn"); 

btn3?.addEventListener
// in the below case ?, not working , so we have other option
// btn3?.disabled = true ;  
if( btn3){
    btn3.disabled = true 
}

// if we do not want to have the generic, we can als have the type assertion 

const btn4 = document.querySelector(".test-btn"); 

( btn4 as HTMLButtonElement).disabled = true  ; 
// see common sense I will ont be using this at each and every place, better to have at the time of declartion 


// Type assertion
const btn5 = document.querySelector(".test-btn")! as HTMLButtonElement; 

// John Smigla preferrs the other approch but we can use it 

// ------------------------------------- the above was theroy --------------------------------------------- 
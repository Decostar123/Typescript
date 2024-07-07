import { type PropsWithChildren } from "react";  
// now let us see at the multiple ptions we have to see the props 
// 1) inline , 
// The TypeScript error "All destructured elements are unused.ts(6198)" occurs when you destructure 
// an object or array but do not use any of the destructured variables. This warning is provided by 
// TypeScript to alert you to potentially unnecessary or unused code, which can help maintain code 
// cleanliness and prevent accidental bugs. 

// ------------------------------------------------------

// function Component( { title, id  } : { title : string ;id : number}) {

// if i rename a variable i will be notifed about the error immediately at the places where I am passing the wromg prop 
// we know something is wrong immediately , we do not need to run aroud bugs like headless chicken 
// we see about the errors where we have procide wrong 

// ------------------------------------------------------

// 2)alternative to inline style receive props 
// what if we have  long list of props or if we wat to resue these props , 
// in this case we can have type or the interface

// after ComponentProps no error 
// alternaively we can also refernce the porps as an object 

// ------------------------------------------------------
// CHILDREN PROPS, which allow elements and components t be passed ino other component 
// typescript will complain, if i wprovide the childre prop, 
// million dollar questions, what will be the type of children ..
// passing the type as this   children : React.ReactNode, other problem is 
// problme with the compoenent which are not passing the children
// one option make it optional LOL :) , #fundamentals 

// SIDE NOTE INDEVELOPEMNT ALL THE THINGS WILL WORK EVEN IF WE HAVE ERROR 
// WE WON'T BE ABLE TO BUILD THE PROJECT UNLESS WE CHANGE SOME CONFIGUARTION AND ALLOW PROJECT TO BE BUILD 
// WITH THE TYPESCRIPT ERRORS 
// other way we can handle children property , we can have type props

// import { type PropsWithChildren } from "react";  PropsWithChildren doing the same thing beichnd the sceen s
// --------------      -----------------------------   ----------------------------------   ----- 

// type  ComponentProps = {
//   name : string ; 
//   id : number  ;
//   children? : React.ReactNode
// }

// in the geenric place, i am pssing placeholder 
type  ComponentProps = PropsWithChildren< {
  name : string ; 
  id : number  ;
  
}>
// type ComponentProps = {
//   name: string;
//   id: number;
// } & {
//   children?: React.ReactNode;
// }                            // we are getting the type children 

function Component( {name , id , children  } : ComponentProps ) {
  
  return (
    <div>
      <h1>Name : { name } </h1>
      <h1>ID : { id } </h1>
      
    </div>
  );

}
export default Component;

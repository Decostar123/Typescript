import newStudent , { sayHello , person , Student} from "./tutorial14";
// import {someValue} from "./example.js"
sayHello( 'deco') ; 

const anoterStudent : Student = {
    name : 'bob', 
    age : 23 
}
console.log(anoterStudent) ;

// should we set up typein another ile and import it 
// or it shouldbe in the same file 

// depends on my preference, 
// I can set up a new file and everyyime er can impory it
// if we are reusing a type then make sense to keep it at one place anf import will be easier 
// comes down to my prefernce 


// HOW YPESCRIPT TREAT JS FILE ? 
// we have .ts or .tsx extension 

// how the js will treat file if it is just .js extension 

// when i try to do 
// import some value from "" -> no suggesstions 
// if if force it ,                 import someValue from "./example.js"

// typescript can not find the file, because it is not a typescript file 
// reason, it is not a tyopescript file , 
// typescript should know everyting about the project 

// if we use code coming from somehwere else, no nnot allowd set as typescript fiele so it knows the shape of the 
// data coming 

// we can do aloowJs:true in compilerOptions, and we can work with js file imports. but should be careful before using it 

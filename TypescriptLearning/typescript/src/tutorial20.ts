// TYPESCRIPT DECLARTION FILE  + tsconfig.json Configuration 
// ----------------------------------------------------------------------------------------------------------
// In TypeScript, .d.ts files, also known as declaration files,consist of type definitions,
//  and are used to provide types for JavaScript code. They allow TypeScript to understand the shape
//  and types of objects, functions, classes, etc., in JavaScript libraries, enabling type checking 
// and autocompletion in TypeScript code that uses these libraries.

// --------------------------------------------------------------------------------------------------


// document.

// HOW I HAVE THE ACCESS TO THE document and it's method? I did not set up ....
// when we work with typescript there is something called decoration file 
// they get included in typescript 
// typescript already knows about the document 
document  ;

// there is info about every method, every parameter, what it is doing , what parameters is it accepting 

// node_modules -> typescrit -> bin -> lib -> many decoration files 

// if I remove dom from here in the package.json 
// "lib": ["ES2020",  "DOM" , "DOM.Iterable"], 
// immediatley i will be getting error 
// the error will be 
// Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler 
// option to include 'dom'.ts(2584)

// any library we want to use in the package

// if we want o instal libraries which do not have declartion  files , 
// there are no type definations  we would not be able to use it 
import bcryptjs from "bcryptjs"  ;

// WOHHH, IT IS GIVING ERROR 
// Could not find a declaration file for module 'bcryptjs'. 
// 'd:/Typescript/TypescriptLearning/typescript/node_modules/bcryptjs/index.js' implicitly has an 'any' type.

// THE SOLUTION IS THERE IS REPO, WHICH CONSIST OF BUNCH OF TYPES, 

// npm i --save-dev @types/bcryptjs
// the moment we have run the above command, the erro of missing declaratio file has gone 

// bcryptjs. // by this we now have access to all th methods 

// typescript declaration files are so important 


// ------------------------------------------------ -----------------------------------   -----------------
// tsconfig.js
// https://www.typescriptlang.org/tsconfig/.-> it has many properties of the confoguartions 

// "include": ["src"]  
// this is the place where we have the typescript files 
//   "target": "ES2020", // by this we control the ouput code 
//     "module": "ESNext",
// what kind of module syntax we are going to get back in the output code 
//     "lib": ["ES2020", "DOM", "DOM.Iterable"], // this is where we control the declartion file 

 
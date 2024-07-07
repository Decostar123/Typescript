// MODULES IN TYPESCRIPT 
// by default typescript file are modules 
const Susan = 'Susan' ; 
let Something = 'Something' ; 


export function sayHello( name : string ) : void{
    console.log("hello  "  + name );
    
}

export let person = 'susan'

export type Student = { 
    name : string  ; 
    age : number
}

const newStudent : Student = { 
    name : 'Peter' , 
    age : 24 
}

export default newStudent ; 
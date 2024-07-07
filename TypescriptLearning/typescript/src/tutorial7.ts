    // Interface - Fundamentals 

// - allow to set up shape for objects ( only objects ) 
// we are coverinf interfce afer type as they are same 
// we can use any one of them  , 
// what programmers do if same thing cn be done in multiple way ? 
//  we argue on twitter ;) 
// and try to coonvce everyone else our solution is better 
// if arguments not work, it just a better practice to do it :)

// according to john smigla, type alias over interface, most oftee we will see type Alias 
// depends on our prefernce depsote what other twitter guru says 
// -------------------------------------------------  ------------------------------ 
// interface Book{
//     // property name and the type 
//     readonly isbn : number ; 
//     title : string ; 
//     author  : string ; 
//     genre? : string 
// }
// type Books = { 
//     readonly isbn : number ; 
//     title : string ; 
//     author  : string ; 
//     genre? : string 
// }

// const deepWork : Book ={ 
//     isbn : 123, 
//     title : 'Deep work ' , 
//     author : 'cal newport' , 
//     genre : 'self-help'
// }
// ----------------  --------------------------   ---------------------------
// methods of interfaces 
// not complex but can be little bot confusing 

interface Book{
    // property name and the type 
    readonly isbn : number ; 
    title : string ; 
    author  : string ; 
    genre? : string  ; 
    printAuthor() : void ;
    printTitle( message : string) : string 
}
type Books = { 
    readonly isbn : number ; 
    title : string ; 
    author  : string ; 
    genre? : string 
}
// Property 'printAuthor' is missing in type '{ isbn: number; title: string; author: string; genre: string; }' 
// but required in type 'Book'.ts(2741)

const deepWork : Book ={ 
    isbn : 123, 
    title : 'Deep work ' , 
    author : 'cal newport' , 
    genre : 'self-help' , 
    // arrow keyowrd not allow to access this, keywrd I will check it definately
    //  --not checked till now 

    printAuthor: function(){
        console.log(this.author);
        
    } , 
    printTitle : function( message : string ) : string {

            return `${this.title} - ${message}`
    }
    
}
deepWork.printAuthor() ; 
console.log(deepWork.printTitle(" this is a message for testing interfaces "));


// we can aslo set the function as a property, not just a a normal function 

interface Property {

    method2( somevalue : number ) : number ; 

    method1 : ( someValue : number )=> number ; 
    // this is part of syntax not a fuction , i find this on better as i can visualize as a normal function 
    
}

let obj : Property = { 
    method1 : function( num : number ){
        return num ;
    } , 
    method2 :  function( num : number ){
        return num  ; 
    }
}

console.log(
    
    obj.method1( 100 ) 
);

// NOW THERE IS LITTLE PROBLEM WITH THE ARROE FUNCTIONS 

interface Property1 {

    name : string ;

    method2( somevalue : number ) : number ; 

    method1 : ( someValue : number )=> number ; 
    // this is part of syntax not a fuction , i find this on better as i can visualize as a normal function 
    
}

let obj1 :Property1 = {

    name : 'deco' , 
    method2: function( num :number ) {
        return num ; 
    } , 
    method1 : ( num : number )=>{
        
        //  i can not access the properties beacuse of the arrow function 
        // console.log(this.name);
        // note because the method1 here is not proper defined , that's why . not because of the function 
        // at line 111, (as it aslo have a fat arrow => LOL )
        
        return num ;
    }

}

let obj2 : Property1 = {
    name : 'deco' , 
    // see the better declaration 

    method2( num :number ) {
        return num ; 
    } , 
    method1 : ( num : number )=>{
        
        //  i can not access the properties beacuse of the arrow function 
        // console.log(this.name);
        
        return num ;
    }
}

// but the better is to use function_name(): return_type 

// while delcare in the object also I can use the same syntax 

//  let obj = { function_name() : string { return "hi"} } 
// in place og 
// let obj = { function_name : function(){  return "hi"}}

// like good to remmeber by the use of function_name () : return_type 
// easy to define + easy to use 
// NOTE : NO NEED OF FUNCTION KEYWORD OR arrow => 



// arrow syntax ha the problem of this keyword 
// the best is to use straight up , less confusing method 
// function_name () : return_type 
// at both the plcaes while declaring interfaces and while decalring the object with the help of interface 

// ## CHALLENGE 

interface Computer {
   readonly id : number ; 
    brand : string ; 
    ram : number ;
    storage? : number   , 
    upgradeRam(amount : number) : number 
}
let computerObj1 : Computer = { 
    id : 123 , 
    brand : 'DELL' , 
    ram : 8,
    upgradeRam( amount : number ){
        this.ram = amount ;
        return amount ; 
    }
}

console.log( computerObj1.ram , computerObj1.upgradeRam( 16) , computerObj1.ram)


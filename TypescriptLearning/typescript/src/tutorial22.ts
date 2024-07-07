// IMPLEMENTING INTERFACE BY THE CLASS 


interface IPerson{
    name : string ;
    age : number ; 
    greet() : void ;
}

// NOTE INTERFACE EXTENDS AND CLASS IMPLEMENTS 

class CPerson implements IPerson{
    
    // we have set the properties i nthe constructor in place of explicitly settign the values 
    // just receive the parameters and allthe things are then done 
    constructor( public name : string , public age : number){

    }
    greet(): void {
        console.log("hello my name is "  + this.name  + " and I am " + this.age );
        
    }
}

const hipster = new  CPerson( "deco" , 23   )    ; 
console.log(hipster);
hipster.greet()  ; 

// this is the way we implement interface with the class 

// THIS WE CAN NOT DO WITH GOOD OLD TYPE ALIAS 



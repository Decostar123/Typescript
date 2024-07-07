// INTERFACE MERGING + EXTENDING THE INTERFACE 
interface Person{
    name : string; 
    getDetails() : string 
}
interface DogOwner{
    dogName : string ; 
    getDogDetails() : string ;
}

// the extra prpert is added  ,no need of | or & 
// this is called REOPEN where we declare the inteerfae again with the same name one more time and typescript merege them together 
interface Person{
    age : number ; 
}
const person : Person = {
    name  : 'john',
    // the age property is not htere one way is the adding the parmater , 
    // the second can be merging the interface 
    age : 30,
    getDetails() {
        return `Name : ${this.name} , Age : ${this.age}`
    },
}

console.log(person.getDetails( ));


// extending the inteface to get the properties 
// creatign a new interface the inherits the properties form the existing interface 
// extending the interface is like & with the type property

interface Employee extends Person{
    emoloyeeID : number  
}
const emloyee : Employee = { 
    name : 'john' , 
    age : 25 , 
    emoloyeeID : 123, 
    getDetails() {
        return `Name : ${this.name} , Age : ${this.age}`

    }
}




console.log( emloyee.getDetails())

// we can also inherto from multiple interfaces  ,
// from the person as wel as dog owner 
interface Manager extends Person ,DogOwner  {
    managePeople(): void
}
const manager : Manager = { 
    name : 'Bob' , 
    age : 35 , 
    dogName : 'rex' , 
    getDetails() {
        return `Name : ${this.name} , Age : ${this.age}`

    }  , 
    getDogDetails() {
        return `the dog name id ${this.dogName}`
    },
    managePeople(){

    }
}
console.log(manager.getDogDetails());


// ## CHALLENGE, PART1 

// SEE HOW BEAUTIFULLY I AM ASSIGING THE TYPES 
interface PPerson{
    name : string
}

interface DDogOwner extends PPerson{
    dogName : string 
}
interface MManager extends PPerson{
    managePeopel():void ; 
    delegateTask():void ; 
}
function getEmployee() : (  PPerson | DDogOwner | MManager ) {
      
    // IF I DO NOT DO QUAL TO NEW OBJECT IN THAT CASE IT WILL JUST HAVE THE PREVIOUS DEINED DATA TYPE 
    // ND ADDING NEW WILL CAUSE ERROR 

    // WE CAN DEFINTELY DO A SIMPLE IF ELSE 

    let randomNumber =  Math.random() ; 
    console.log( ' the random value is '  , randomNumber )
    
    if( randomNumber < 0.33 ){
        return { name : 'John'}
    }else if( randomNumber < 0.66 ){
        return { name : "John" , dogName:"abc" }
    }else{
        return { name : "John"   , managePeopel(){ console.log("managing the people") } , 
            delegateTask(){ console.log(" deleegatign the task ...............")} } ; 
         
    }
    
}

let testObj : MManager = {
    name : 'deco' , 
    managePeopel(){} , 
    delegateTask(){} , 
   

}

function isManager( obj :  (  PPerson | DDogOwner | MManager )  ) : boolean{
    return 'managePeopel' in obj ;
    // return true  ; 
}
function modifiedisManager(obj: PPerson | DDogOwner | MManager): obj is MManager {
    return 'managePeopel' in obj;
  }
for( let i= 0 ;  i <= 5 ;i++ ){
    let ansObj : (  PPerson | DDogOwner | MManager ) = getEmployee()  ; 
    console.log( ansObj  )  ; 
    console.log( ansObj.name)


// by this way i can not call the function directly, but in place of the implementaton 
//  if I had written in here only then it has worked , fluently 

    let ans = isManager( ansObj ) ; 
    if( ans ){
        // ansObj.
        // the reason ansObj is giving only name property is that 
        // who knows about the logic of the function, it can return true directly also without any cross checks 
        // it still can be one of the 3 types 


    }
//    this is still not working, 
// the expected way is that there should be no compilation problem 
 
    let res :  boolean = modifiedisManager( ansObj )
    if( res){
        // ansObj.managePeopel() ;
    }

    
    
}


// # if it is manager then invole the function delegateTask 

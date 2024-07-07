// TYPE ASSERTION 

// it is a way to tell brwoser what type the existing varible is 
// this is usfule when we know more of type then the typescript does
// it is more handy with dom elements , these example may not be convinvg 
// we cover exaples in the later scetion 


let someValue : any = 'this is a string ' ; 

// the keyword we are looking fot is as 

let strlength : number =  ( someValue as string).length ; 


// we can also use with JSON parse '

type Bird = {
    name : string ; 
}

let birdString = '{ "name" : "Eagle"}'
let dogString  = '{ "breed" : "Poodle"}'

let birdObject = JSON.parse( birdString) ; 
let dogOBject = JSON.parse( dogString) ; 


// the type of birdObject  is of type any 
// but i do not want the type to be any 
let bird = birdObject as Bird ; 
// I CLEARLY KNOW THAT MAY BE I AM GETTING OF TYPE ANY , 
// I KNOW THAT SIGNATURE MATCHED OF THE birdString 

let dog = dogOBject as Bird ; 
// this is incorrect , i can not access the origin al prpoerties of dog which is breed 

console.log(dog.name , dog)
// the dog.name will give unddefined 
// typescript is not complaining as I made a type assertion but yes this will be 
// type Bird even though it is actually type Dog 



enum Status{
    pending = 'pending' , 
    declined = 'declined'
}
type User= { 
    name : string ; 
    staus : Status
}

// save Status.pending in the DB as string 
// retrive the string from the DB 
const stausValue = 'pending'
const user:User = { name :'John' , staus : stausValue as Status } 
// it is a string, but i know for sure that it is type Status 

// assertion tell typescript we know more about the type then the typescript 


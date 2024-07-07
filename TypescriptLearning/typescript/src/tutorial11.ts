// ENUMS IN TYPESCRIPT 

// we do not have it in javascript 
// enums allow us to define the set of names 

// synatx go with the keywod enum 

enum ServerResponseStatus {
    Success  = 200 , 
    Error = 'Error'
}
// the above only 2 types can be done witht he help of normal type erverResponseStatus  = 'Success' | 'Error'
// but enum treats the value as it's ( ServerResponseStatus  ) type rather then a normal string 

interface ServerResponse{
    result : ServerResponseStatus , 
    data  : string 
}


function getServerResponse()  : ServerResponse{

    // 'Errro' will be incorrect 

    return { result : ServerResponseStatus.Error , data : "deco"}
}

let response = getServerResponse() ; 

console.log( response)
// {result: 1, data: 'deco'}
// values are 0,1,2...    the more values we add the   more number we will have 

// I can also reassign the default numbers to the enum 


// GOTCCHA WITH ENUMS 

console.log(ServerResponseStatus);

// when we have number values it is actually going to do the reverse mapping 
//  { 200: 'Success', Success: 200, Error: 'Error'}200: "Success"Error: "Error"Success: 200[[Prototype]]: Object

// number became the property and the contant name is set a value 


Object.values( ServerResponseStatus).forEach(( ele ) => console.log( ele ))
// Success  , 200,  Error

Object.keys( ServerResponseStatus).forEach(( ele ) => console.log( ele ))
//  200, Success , Error


// it will not be the case here 


// console.log(ServerResponseStatus);
// {200: 'Success', Success: 200, Error: 'Error'}


enum _ServerResponseStatus {
    Success  = 'Success' , 
    Error = 'Error'
}


// now we are onlyaccessing the string 

Object.values( _ServerResponseStatus).forEach(( ele ) => console.log( ele ))
// Success  , 200,  Error

Object.keys( _ServerResponseStatus).forEach(( ele ) => console.log( ele  ))
//  200, Success , Error


// if we hae numbers we cansolo have the type check typeof before accessing the values 


// ANOTHER PLACE WHERE WE HAVE TO BE CAREFUL IS WHEN  I AM SETTING THE VALUES 

// the value as a number is acceptedm but the value as an string or oteher is not accepted 

enum SampleEnum{
    ok = 1  ,
    wrong = 'mistake'
}

interface SampleInterface{
    result : SampleEnum , 
    data  : string 
}

let sampleObj : SampleInterface = {
    result : 1 , 

    // SEE HERE THE RESULT KEY WITH THE VALUE  1 IS ALLOWED , here the String as a value will not be allowed 

    data : "sample data "
}
console.log( sampleObj)


// ## CHALLENEG

enum UserRole{
    Admin , 
    Manager, 
    Employee
}
type User = {
    id : number ; 
    name : string ; 
    role : UserRole ; 
    contact : [ string , string ] 
}
function createUser( userObj : User ) : User {
    return userObj ;
}
let userObj :User = { 
    id : 123  , 
    name : "user" , 
    role : UserRole.Manager , 
    contact : [ "user@mail.com" , "704101298"]

}
let result = createUser( userObj ) ; 
console.log( result ) ; 
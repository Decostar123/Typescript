// TYPE ALIAS
let example = `
const john: { id: number; name: string; isActive: boolean } = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan: { id: number; name: string; isActive: boolean } = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: { id: number; name: string; isActive: boolean }): {
    id: number;
    name: string;
    isActive: boolean;
  } {
    console.log( "Hello there " + "$ {user.name.toUpperCase()}" + " !!! ");
  
    return user;
  }
               `     
  
//   we are taking smae type at many places and also input and outpt same at function 
// we are having thr same code again and again , 
// 21 lines of code , repeating  the same code 

// type Aliias is just a new name or  a shorthand for existing type 
// with type Alias it is easir ti use this thing  ------ user: { id: number; name: string; isActive: boolean } -----

// we are not creating a new type, just an alias and all the same rules apply 
// that's why we have covered inline type annotations because nothing is goinf to change 
// as far as functionality including opional propetty and read only modifier 
// also code is less clunky (solid, heavy and old fashioned ) because all use the same name 

// THE CONVENTION IS TO GO WITH UPPERCASE, BUT WE NOT HAVETO 
// type User , the remaiing thing will be same, copy paste 
type User = { id: number; name: string; isActive: boolean } ;



const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan:User = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: User ): User{
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  }

//   see all the things are replaced easily 
// which one is eir to managae and read , second one type Alias
// type alias ealiy to work with, we can also easily export the type import yh tpe and can use it 

// WE ARE NO LIMITED TO USE TYPE ALIAS FOR OBJECT, IT IS OPTION 
type StringOrNumber = string | number ; 
// anywhere in the porject we want to use sthis type , we can use StringOrNumber easily 

let value : StringOrNumber = 123 ; 
// we will not see this often most likely not but better be aware about it 

type Theme  = 'light' | 'dark' ; 

let themeVarible :Theme = 'light'    ; // can not use any other varible 

// super helpful as project growsup bigger 
// NOTE TYPE IS NOT AN OJECT, IT JUST DIMPLY REPLACES THE EXISTING BORING TYPES WHICH WILL BE REPETED AT MULTIPLE PLACES 

// # CHALLENGE 

// THE PROBLEM HERE IS HOW TO CHECK IF THE TYPE OF PARAM1 IS WHICH TYPE Employee ir Managaer 
// If I use typeof() it is giving object 
type Employee =  { 
    id : number ; 
    name : string ; 
    department : string 
}
type Manager = {
    id : number ; 
    name : string ; 
    employees : Employee[] 
}
type Staff = Employee | Manager ; 

function printStaffDetails( param1 : Staff){
    console.log(  param1 , typeof( param1  ) )
    // let arr = Object.keys( param1 ) ; 
    // console.log( arr )
    // // this is also not helping to access the propert , how to check ? 
    // if( arr[2] == 'department'){
    //     // console.log("the person is employee and the name is "  +  param1[arr[2]] );
        
    // }

    // another million dollar quetion , how to cehck the staff object is 
    // manager or employee 
    // we can not use typeof as both are object 
    // picking property specific to object 

    if( 'department' in param1 ){
        console.log("the person is  " +   param1.name  + " and the depatment is "  +  param1.department  );
    }else{
       console.log( "the number of emplyoess are " + param1.employees.length)
    }

}

let param1 : Employee = { id : 1 , name : "Deco" , department : "SDE" } ; 

printStaffDetails( param1 )  ;

// `in` is working nice + checks prototype checking unlike Object_name[key_name] + Object_name[key_name] is not workign here 
// using 'in' in place of `typeof`

// type alis + type guard 
// INTERSECTION TYPE IN UNION 

type Book = { id : number ; name : string ; price : number }
type DiscountBook = Book & { discount : number }  ;
const book1 : Book={
    id : 1 , 
    name : 'how to cook a dragon', 
    price : 15 
}
const book2 : Book = { 
    id : 2 , 
    name : 'The secret life of unicons ', 
    price : 18 
}
// in place of | using & 
// const  discountedBook : Book &  { discount :number } = { 

const  discountedBook : DiscountBook = { 
    id : 3 , 
    name : 'Gnoems vs Goblins: The ultimate Guide' , 
    price : 25 ,
    discount  : 0.15 
}

// the discount prpoerty is not in discountBook 
// we could creat other type and add dicount property , 
// or utilize intersection type 
// can use separate type for the discount 



const propName = 'age' ; 
// let will give eroro , as they fo not understand what is the key name , andit can change
// so nuch type has been set 

type Animal = {
    [propName] : number 
}

let tiger : Animal  = { [propName] : 5}
// propName
// let dog : Animal= {  "dog" : 5}  // this will give an error  as the key is age not dog + i can not change the propName
// i can not change the propname 
// GENERICS 
// they allow us to write function with any data type 
// we can think of generics as varible for type 
// it's not an easy 

// most likely in begining we use generics for interfaces created by sombeody else 
// either creator of typescrpit or developer of third party library 
// when we see <> it is generic 


// In TypeScript, we can declare an array using two syntaxes:

let array1: string[] = ['Apple', 'Banana', 'Mango'];
let array2: number[] = [1, 2, 3];
let array3: boolean[] = [true, false, true];

// the one thing wich not change is 
// i do not have string array type, i have the above syntax 


// just like the array we may need to set up and interface allowing any type, anyone can use it 
// we can pass any ttype and call method the same way 

// NOW KNOWING THIS WE CAN SEE SECOND APPROACH TO CONSTRUCT ARRRAY 

let array4: Array<string> = ['Apple', 'Banana', 'Mango'];
let array5: Array<number>= [1, 2, 3];
let array6: Array<boolean> = [true, false, true];

// the only thing which is changing the type which we are passing 
// we pass string, we get back array of string 

// NOW WE CAN CONSTRUCT OUR OWN TOPICS 

// create a function which take any type and return the same type 

function createString( arg : string ) : string{
    return arg ;
}

function createNumber( arg : number ) : number{
    return arg ; 
}

//  now for all the types we need to copy paste the coe again and again 
// SO THE SOLUTION IS generics 

// NOTE : ICAN HAVE ANY OTHER NAME IN THE PLACE OF T 
function genericFunction<T>(arg:T):T{
    return arg  ;
}

// this is working smmoth 
console.log(genericFunction( "hi") );

console.log(genericFunction( 123456) );



// the funtion geenricFunction is not limited to any one type, it is generic can use any type and get back same type 

interface GenericInterface<T>{

    value : T ; 
    getValue:()=>T ; 

}

const genericString : GenericInterface<String> = {
    value : 'deco', 
    getValue() {
        return this.value ; 
    },
}

console.log(genericString.getValue());
// in realty we tink it is silly ...but 


// async function someFunc():string{
//     return "Hello World"
// }


// The return type of an async function or method must be the global
//  Promise<T> type. Did you mean to write 'Promise<string>'?ts(1064)


// const result = someFunc()  ;

// see we have set the type 

async function someFunc1():Promise<string>{
    return "Hello World"
}
// as silly as it looks it handle all the cases we are interested 


// ## CHALLENGE 
// create a function whic takes 2 inpt size and the conten , and retuen a new array og the ggiven size 
// having all the content filled 
function createStringArray( size : number , word : string ) : string[]{
    return new Array(size).fill( word) ; 
}
// see first i have made of type string , now i am tryign to make of type Generic, T 

function createArray<T>( size : number , word : T): Array<T>{


    // good to give the type T, otherwise it is like, getting type any 

        let arr : T[] = new Array(size).fill( word ) ; 
        return arr ;
}


console.log(createArray( 4 , "hi"));

console.log(createArray( 4 , 4 ));

// now returngin 2 types 

// it is convention to use T , U and then other parameters 

function pair<T, U>( param1:T, param2 : U) : [T,U]{

    return [ param1 , param2 ] 
}

let result = pair<number , string>( 123 , "hello ") ; 
console.log(result);

// const [ name , setName] = useState('' )  ; 
// now useState hook is a generic, make sense right we can pass in string , array , number or anything 
// it accept any value which we pass , and as it is geenric we can technially by pass the angualr breacket ,
// but when we are going to set up arrays , typescript complain 
// and we have to really tell it will be array of given data types

// const [ product , setProduct ] = useState<Product[]>([]) ; 

// this really happens the type which I am passing 


// SEE, I HAVE CAREFULLY OVERCAME THE TYPE , GENERIC WITH THE <> WHICH I AM PASSING 
// but careful with complex types if typescript can not infer 
let ans = pair( 1 , 2 ) ; 
console.log(ans);


// here , i am passing string and expoecting sting back, 
// there no real benfit of settign type and estending it 
// it s an option  , 
// we can also use thw union type 
function processValue<T extends string | number >( value : T ) : T{
    console.log(value);
    return value  ;

}

console.log(processValue("hello ..... hi"));
// console.log(processValue( 124 ));
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)


// MORE COMPLEX EXAMPLE WE WILL SEE NOW 

type Car = {
    brand: string;
    model: string;
  };
  
  const car: Car = {
    brand: 'ford',
    model: 'mustang',
  };
  
  type Product = {
    name: string;
    price: number;
  };
  
  const product: Product = {
    name: 'shoes',
    price: 1.99,
  };
  
  type Student = {
    name: string;
    age: number;
  };
  
  const student: Student = {
    name: 'peter',
    age: 20,
  };
  function printName<T extends Student | Product >(input : T) : void{

    console.log(input.name); // it will give error as not sure tht the name property exist on the input 
    
  }
  
  printName( student )
//   THERE IS A BETTER WAY THEN THIS NORMAL EXTENSGIN TO STUDENT OR INPUT 
// intend of extending  to a type , we can extend just to an object, telling the type we have 

function printName2<T extends { name : string } >(input : T) : void{

    console.log(input.name); // it will give error as not sure tht the name property exist on the input 
    
  }
//   printName( car )  // on passing the car, it will still give error as it not have the name property 

interface StoreData<T>{
    data : T[] 
}

const sotoreNumbers : StoreData<number> = { 
    data : [1,2,3,4]
}



// Generic type 'StoreData<T>' requires 1 type argument(s).ts(2314)
const randomStuff: StoreData<any> = { 
    data : [1 , "23" ]
}

// if i not know the data i want i can use any 

// we can also dolike 
// now we can have any type , if we are not sure about the storeData we have
interface StoreData<T = any >{
    data : T[] 
}





// data is located in the data property

// const { data } = axios.get(someUrl);

// axios.get<{ name: string }[]>(someUrl);

// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>;
// }

// export interface AxiosResponse<T = any, D = any> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: InternalAxiosRequestConfig<D>;
//   request?: any;
// }



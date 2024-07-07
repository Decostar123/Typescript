import React , {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import InputField from './component/InputField';
import TodoList from './component/TodoList';
import { type Todo } from './model';
import { log } from 'console';
let name : string  = "piyush"  ; 
// Javascript auto matically decide what the type of varible is 
// but in typescript we have to define the types 

// name= 5  ;
// Type 'number' is not assignable to type 'string'.ts(2322)

// type ANyObject =  { 
//   [key : string ] : any 
// }

let age : number = 5 ; 
// we have other types also like boolean, object, array, tuple , undefined, null 

// typle is basically fixed size array with defined types 

// now how to define object 
// let person : Object ; 

// person = { age : 4 , name : 3}  ;
// person.name = 5 
// we can use the type keyword also and general convention is to have first letter of the type as capital 


let role:[number ,   ]  = [1] ; 
let hobbies : string[] ; 
function App() : JSX.Element {

  const [todo, setTodo] = useState<string>("") ; 
  const [todos , setTodos ] = useState<Todo[]>([]) ; 

  // creating the function here and cn pass simply 
  const handleAdd = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault() ; 
    if( todo){
      setTodos( prev => [...prev , { id : new Date().getTime().toString() , todo  , isDone : false }]) ; 
      setTodo("") ; 
      console.log(todos);
      
      
      
    }
  }

  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

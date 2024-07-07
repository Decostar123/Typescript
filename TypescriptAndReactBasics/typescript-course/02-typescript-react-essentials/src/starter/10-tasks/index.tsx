import Form from "./Form";
import List from "./List";
import { type Task } from "./Task";
import { useEffect, useState } from "react";

function loadTask() : Task[]{
  const storedTask = localStorage.getItem("tasks") ; 

  return storedTask?JSON.parse( storedTask ) :  []  ;  

}
  function updateTask( arr : Task[] ){
    localStorage.setItem(  "tasks" , JSON.stringify( arr  )   )
  }
function Component() {
  const [ taskList , setTaskList] = useState<Task[]>( ()=> loadTask() ) ; 

  // here I can also pass a function for adding Task in place of entire state varibles and the other stuff 
  // adding function is good option as no extra type checking neede 

  useEffect(()=>{
    updateTask( taskList )
  }  , [ taskList] )
  return (
    <div>
      <Form taskList={taskList}  setTaskList={setTaskList} />
      <List taskList={taskList}  setTaskList={setTaskList}  />
    </div>
  );
}
export default Component;

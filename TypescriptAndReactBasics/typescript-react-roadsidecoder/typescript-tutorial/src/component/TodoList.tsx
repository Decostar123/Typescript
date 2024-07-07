import React from 'react'
import "./styles.css" ; 
import { type Todo } from '../model';
import SingleTodo from "./SingleTodo"

interface Props{
    todos:Todo[]  ; 
    // copy paste the type in place of the function keyword defination 

    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList : React.FC<Props> = ({todos , setTodos}) => {
  return (
    <div >
        {
            todos.map(( taskInfo ) => <SingleTodo taskInfo={taskInfo} todos={todos} setTodos={setTodos} key={taskInfo.id} /> ) 
        }
    </div>
  )
}

export default TodoList
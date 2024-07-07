import React, { FormEventHandler, FormHTMLAttributes } from 'react' ; 
import { type Task , type StateInput } from './Task';

const Form = ({ taskList , setTaskList} : StateInput) => {
    function fromSubmitted(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault() ;
        console.log( "a new task is here " ,  new Date().getTime().toString() , Date.now());
        // console.log( Date.now());
        
        
            const form = e.target as HTMLFormElement;

        let formData = new FormData(form as HTMLFormElement) ; 

        let arr = Object.fromEntries( formData ) ; 
        
        let taskObj : Task = { description : String(arr.description)  , isCompleted : false , id : String(taskList.length+1) }

        console.log(taskObj);
        
        setTaskList( [ ...taskList , taskObj ])  ; 
        
        // setTaskList( ( prev : Task[] ) =>[...prev] )
        
        form.reset() ;

    }
  return (
    <form className="form" onSubmit={e => fromSubmitted(e)}>
            <input type="text" className="form-input mb-1" name="description" required />
            <button type="submit" className="btn">add task</button>

    </form>
  )
}

export default Form
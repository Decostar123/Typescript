import React, { useState , useRef, useEffect } from 'react'
import { type Todo } from '../model'
import { AiFillEdit , AiFillDelete} from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css"
// see in interface I am not assiging it to any object 

interface Prop{
    taskInfo : Todo ; 
    todos : Todo[] ; 
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo:React.FC<Prop> = ({taskInfo , todos , setTodos} ) => {
    const [ edit , setEdit ]= useState<boolean>( false ) ; 
    const [editTodo, setEditTodo] = useState<string>(taskInfo.todo); 

    function handleDone(id : string ){
        // alert(id )
        setTodos((prev)=>prev.map((ele)=>{
            // there is an importance of making new object, so tat it is not still 
            // pointing the previos one and can get the new one 
            let taskObj:Todo = {...ele}
            if( ele.id === id ) taskObj.isDone = !taskObj.isDone ; 
            return taskObj ; 
        }))
    }
    function handleDelete( id : string ){
        
        const ans  = window.confirm("Are you sure you want to delete the task? ") ; 
        if( !ans ) return ; 
        setTodos( prev => prev.filter(( ele ) => ele.id !== id ))
    }
    function handleSubmit(e:React.FormEvent<HTMLFormElement> , id : string ){
        e.preventDefault() ; 
        // alert("hi")
        setTodos( prev => prev.map(ele =>{
            let editObj = {...ele} ; 
            if( editObj.id === id ) editObj.todo = editTodo ; 
            setEdit( false) ; 
            return editObj ; 
           
        }))
    }
    const inputRef = useRef<HTMLInputElement>(null) ; 

    useEffect(()=>{
        // this useEfect runs at last after the elemnts have been rendered 
        // so it is good, to use the input ref here as the elements have come and now I can edit 
        if( edit) inputRef.current?.focus()
    } , [edit])

  return (
    <form className='todos__single' onSubmit={(e)=>handleSubmit(e , taskInfo.id)}>
        {
            edit ?   <input type="text" ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todos__single--text'/> :
                taskInfo.isDone ?
                <s className="todos__single--text">{taskInfo.todo}</s> : 
               <span className="todos__single--text">{taskInfo.todo}</span>
               
        }
     
        
        <div>
            <span className="icon"  onClick={()=>{
                if( !edit && !taskInfo.isDone){
                    // yup,, the focus is imoportant, as now the person should start typing in the content 
                    // inputRef.current?.focus()
                    // the problem the focus is not working in this way is that, till now 
                    // there is no element which can be  edited by me  
                    
                    setEdit( true)
                }
            }}><AiFillEdit /></span>
            <span className="icon" onClick={()=>handleDelete( taskInfo.id)}><AiFillDelete/></span>
            <span className="icon" onClick={()=>handleDone( taskInfo.id)}><MdDone/></span>

        </div>
    </form>
  )
}

export default SingleTodo
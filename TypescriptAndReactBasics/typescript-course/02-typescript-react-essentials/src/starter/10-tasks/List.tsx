import React , {useState} from 'react'
import { type Task  , type StateInput} from './Task'
const List = ({taskList , setTaskList } : StateInput ) => {
  return (
    <div>
        <ul className="list" >
            {
                taskList.map((ele )=>{
                    return   <li key={ele.id}>
                    {ele.description}
                    <input key={ele.id}  type="checkbox" checked={ele.isCompleted} onChange={ ()=> {
                        ele.isCompleted =  !ele.isCompleted  ;
                        setTaskList([...taskList ]) 

                        // seTaskList( taskList.map( (member)=> {
                        // if( member.id === ele.id  )  nmember.isCompleted = !member.isCompleted })) ; 
                        // return member ;
                    } } />
                </li>
                })
            }
          
        </ul>
    </div>
  )
}

export default List
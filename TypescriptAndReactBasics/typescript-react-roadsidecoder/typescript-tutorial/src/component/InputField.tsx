
import React, { useRef } from "react"
import "./styles.css"

type  Props = {
    todo : string  ;
    setTodo : React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e : React.FormEvent<HTMLFormElement> )=>void 
    // can also write handleAdd():void  
}

    const InputField : React.FC<Props>= ({ todo, setTodo , handleAdd}   ) => {


        const inputRef = useRef<HTMLInputElement>(null) ; 

  return (
    <form
      className="input"
      onSubmit={(e )=> {
        inputRef.current?.blur() ; 
        handleAdd(e)
      }}
    
    >
      <input
      ref={inputRef}
        type="text"
        placeholder="Enter a Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
        required
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  )
}

export default InputField
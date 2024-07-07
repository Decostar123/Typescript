import { useState } from "react";


// when we do inline every thing is inferren and not that much differnce between typescript and not typescript 
// if we set up function then we willneed to see the correct type or the event 
// therr are 2 tihngs 
// 1)correct event type 
// 2) correct HTML element 
// if we get any suggestion then we will consider the prop and get suggestion for correct event type and correct HTMLElement

// ---------------------------------------------------------------------------------------------------------------++---

// intersting tough things which I have noticed 
// one thing     const formData = new FormData(  e.target as HTMLFormElement ) ; 
// second  thing         const text = formData.get('text') as string  ; 
//   function handleSubmit( e : React.FormEvent<HTMLFormElement> ){
  // Object.fromEntries( formData ) ; 



type Person = { 
  name :string ; 

}
function Component() {
  const [ text  ,setText]  = useState('') ; 
  const [email , setEmail ] = useState('') ; 

  const handleChange = (e :  React.ChangeEvent<HTMLInputElement> )=>{
    // console.log(e.target.value);
    setEmail( e.target.value)
  }

  function handleSubmit( e : React.FormEvent<HTMLFormElement> ){
    e.preventDefault() ; 

    // see e.target is causing problem and the solution is e.currentTarget or e.target as HTMLFromElement
    // const formData = new FormData(e.currentTarget) ; 

    const formData = new FormData(  e.target as HTMLFormElement ) ; 


    formData.forEach((ele)=> console.log(ele) ) ;

    // this was the method I was looking for centuries 

    const data = Object.fromEntries( formData ) ; 
    // Object.fromEntries is a useful method in JavaScript that converts a list of key-value
    // pairs into an object. This method is particularly handy when you need to transform data
    // structures like maps, arrays of arrays, or results of certain array manipulations (e.g., map or filter) back into an object.
    console.log( data );
    const text = formData.get('text') as string  ; 
    // const text: FormDataEntryValue | null
    // i know better, it is string, so use :as string 

    // const person: Person= {  name : text  }
    // same porblem with data.text also
    
    const person: Person= {  name : data.text as string  }

    
    
   }

  return (
    <div>
      <h2>Event Example</h2>
      <form  onSubmit={(e)=>handleSubmit(e)} className="form">
        {/* if we provide the inline one  ,everyhing is going to be set already  */}
        <input type="text" className="form-input mb-1"  value={text} onChange={(e)=>setText(e.target.value)}
        name="text"
        />

        {/*   */}
        <input type="email" className="form-input mb-1"  value={email} onChange={(e)=>handleChange(e)} 
        name="email"
        />

        <button type="submit" className="btn btn-block">submit</button>
      </form>
    </div>
  );
}
export default Component;

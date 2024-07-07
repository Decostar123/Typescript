import { useState } from "react";

// (alias) function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] 
// see here initialState is one of the parameters it is not the object, so the name do not need to be same 
// -----------------------------------------------------------     --------------------------------

// i can pass the genrics type in the parameter but like <> of useState but no need as, can infer typescrit is smart 
// typescript do god job of inferrring type  


// -----------------------------------------------------------     --------------------------------


// const [ list , setList ] = useState(['hello']) ; 
// without hello the type is never , but with "hello" the type became string but there are instances 
// where we do not need to pass the types , the solution is to use the genric type 


// -----------------------------------------------------------     --------------------------------

// NOW WE WILL SEE A LIST OF OBJECTS FOR THE ARRRAY 

 // the object is matcing signature, if i omit any property 
        // All of these is ttype but the problem is typescript infer 
        // when typescript infers somthing it infers  based on what , the orignal value ,
        // if i comment the text from any place, now  it can not understandthe type 
        // the defination changes to something like  text?: undefined;
        //  so even if the text is not given, still there is no problem 
        // so this is the good usecase to use generics and provide the type 
        // setLinks( prev => [...prev , { id : prev.length +1 , url : "some url " , text : "some text" }])
        // setList([ 1 ,2 ])
// -----------------------------------------------------------     --------------------------------




// -----------------------------------------------------------     --------------------------------

type Link = { 
  id : number  ; 
  url : string; 
  text  : string ; 
}
const navLinks   = [
  {
    id : 1 , 
    url : "some url", 
    text : "some text"
  } , 
  {
    id : 2 , 
    url : "some url", 
    text : "some text"
  }, 
  {
    id : 3 , 
    url : "some url", 
    text : "some text"
  }, 
  {
    id : 4 , 
    url : "some url", 
    text : "some text"
  }
  , 
  // {
  //   id : 5 , 
  //   url : "some url", 
  //   // text : "some text"
  // }
 ]

function Component() {

  // typescript is amart and can infert type so noneed to tell that it is string as it is one of primitive 

  const [ text , setText] = useState("shakeandBake")
  const [ number , setNumber ] = useState(0) ; 
  const [ list , setList ] = useState(['hello']) ; 
  // without hello the type is never , but with "hello" the type became string but there are instances 
  // where we do not need to pass the types , the solution is to use the genric type 

  
  
  // note : navLinks:Link[] is not given in the defination , so that the typescript ca nnot infer 
  const [ lins , setLinks] = useState<Link[]>(navLinks) ;
  // typescript is super smart and knows that the Link has the shape 
  // const navLinks: { id: number;  url: string;  text: string; }[]

  
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center" onClick={()=>{
        setText("5") ; 
        setNumber( 23) ; 
        setList(['hello' , 'world']) ; 
        // the object is matcing signature, if i omit any property 
        // All of these is ttype but the problem is typescript infer 
        // when typescript infers somthing it infers  based on what , the orignal value ,
        // if i comment the text from any place, now  it can not understandthe type 
        // the defination changes to something like  text?: undefined;
        //  so even if the text is not given, still there is no problem 
        // so this is the good usecase to use generics and provide the type 
        setLinks( prev => [...prev , { id : prev.length +1 , url : "some url " , text : "some text" }])
        // setList([ 1 ,2 ])
  }}>Click Me</button>
    </div>
  );
}
export default Component;

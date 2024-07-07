import { useContext } from "react";
import { useTheme, ThemeProvider } from "./context";

// anyonr using ParentComponent can easily figure it out 
export function ParentComponent(){
  
  // console.log("hi");

  // see, if i have used the Component only rturning it then context have not receved anyhtign because actually that 
  // part of code is not called , 
  // so it is better to have undefine
  // const ThemProviderContext = createContext< { name : string } | undefined >( undefined ) ; 

  // return <Component/>
  
return(

  
// note here, ThemeProvider does require thr child Component 

    <ThemeProvider >
      <Component/>
    </ThemeProvider>


)
 

}
function Component() {
  // console.log("hi ............. ");
  
  const context = useTheme() ;
  console.log(context , "... context ");
  
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
      <button onClick={()=>{
        console.log(context.theme);
        
        if( context.theme === 'dark'){
          context.setTheme('light') ;
          return  ;
        }

        context.setTheme('dark')

      }}   className="btn btn-center">ToggleTheme</button>
    </div>
  );
}
export default Component;

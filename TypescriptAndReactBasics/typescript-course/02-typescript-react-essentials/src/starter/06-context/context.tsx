import { createContext , useContext , useState } from "react";
// by the cteated Context info I will createdInfo.provider thing 

// now simply only replacing the types is remaining 

type Theme = 'light' | 'dark' | 'system' ; 
type ThemeProviderState  = {
    theme : Theme ; 
    setTheme( param1 : Theme):void ; 
    // OPEN YOUR WYES AND LOOK AT THE DEFINATION FO THE 'setTheme' METHOD PROVIDED BY USE STATE 
}
const ThemProviderContext = createContext< ThemeProviderState | undefined >( undefined ) ; 

type ThemeProviderProps = { 
    children : React.ReactNode ; 
    defaultTheme? : Theme ;
}

// note here children is not an optional parameter, it is compulsory 
// ThemeProvider has the ability to be used in a particular section 

// in place of doing this I could have directly wrapped from the main Appp component at the time of calling function 
// and called the requird things 
export function ThemeProvider( { children , defaultTheme = 'system' } : ThemeProviderProps ){

    const [ theme , setTheme ] = useState<Theme>(defaultTheme)
    // note eve if not privodeed anythih, as inital stil the code works because 
    // it is taking undefined as a parameter , in union while taking the generic type ipput T|undefined
    
    console.log(" the theme was " , theme);
  return (
   <ThemProviderContext.Provider value={{ theme , setTheme } }>
    {children}
   </ThemProviderContext.Provider>
  )
}


export  const useTheme = ()=>{

    
  const context =  useContext( ThemProviderContext )  ;
  // why undefined, even emoty string is allowed 
  if( context === undefined){
    throw new Error("useTheme must be used within Theme Provider ")
  } 
  return context ;
}
// ---------------------------------------------        V. IMP          -------------------------------------------------------------


// export function ThemeProvi


// children prop property 


// The children prop in React is a special prop that allows you to pass components or elements
//  between the opening and closing tags of a custom component. This is useful for creating reusable
//  components that can wrap other components or content.

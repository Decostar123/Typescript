
// typescriot infers the return type , hver over and the type of return is  JSX.Element
// ----------------------------  ------------------------- --------------------------------------------

// Component' cannot be used as a JSX component.
//  Its type '() => void' is not a valid JSX element type.
//  Type '() => void' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
//  Type 'void' is not assignable to type 'ReactNode'.ts(2786)

// in biger project , having no retuen cnbe tricky to stop sometime , 
// better to write the retrun type , JSX.Element
// SO, CODE ERROR IS GOING TO BEST FRIEND ~ JOHN SMIGLA

// ----------------------------  ------------------------- --------------------------------------------

// what if I set the Component() : JSX.Element and return a normal string , or null, 
// if we do not have the return tupe  JSX>Element , typescript is smart and can infer , 
// in this case it can be string or null or  JSX.Element 

// this comes down to our prefernce, 
// one option can let typescrip to infer type , it an create problem when  I do not retun anything
// or I can hardcode over the types, as he logic changes I have to adjust 
// JOHN SMigla hardcodes :)
function Component() : JSX.Element | string  | null {

  // return null ;
  // return "a string value"  
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
    </div>
  );
}
export default Component;

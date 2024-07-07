// import {ParentComponent} from "./starter/06-context";
// import Component from "./starter/01-return";
// import Component from "./starter/04-events";
// import Component from "./starter/06-context" ; 
// import Component from "./starter/09-rtk";
import Component from "./starter/10-tasks"
// import store from './starter/09-rtk/store.ts';
import {store} from "./store"
import { Provider } from "react-redux";
// import ContextIn
// function App() {
//   return (
//     <main>
//       <h2>React & Typescript 💘</h2>
//       {/* Type '{ name: string; id: number; }' is not assignable to type 'IntrinsicAttributes'.
//   Property 'name' does not exist on type 'IntrinsicAttributes'.ts(2322) */}

//   {/* it is like setting up function providing the argument but we have not set up the parameters, 
//   typescript not knows what to accept  */}

//       <Component name="peter" id={123} >
//         <h2>Hello World </h2>
//       </Component>
//       {/* look at build time i know about the error  */}
//       <Component name="deco" id={345} />
//     </main>
//   );
// }
// function App() {
//   return (
//     <main>
//       <h2>React & Typescript 💘</h2>
    
  
//   {/* THE CHALLENGE OS LIKE IF I PROVIDE THE TYPE AS BASIC, ILOOK ONLY FOR NAME , 
//       BUT IF I PPOVIDE THE TYPE ADVANCED I ALSO LOOK FOR THE EMAL , PLUS THE COLOR IS ALSO CHANGED 
//   */}
//   {/* based ono the types, we are providing different set of props, if not getting error   */}
//   {/* a component where i am provding the  */}

//   {/* 1) one possibel solution is optional parameter  */}
//   {/* i do not want to have an optional parameter (providing emailas empty , just have erro if present or not present  */}
//       <Component type="basic" name="susan"/>
//       <Component type="advanced" name="susan" email="anna@gmail.com"/>  


//     </main>
//   );
// }

// import { useTheme, ThemeProvider } from "./starter/06-context";
// function App() {
//   return (
//     <main>
//       <h2>React & Typescript 💘</h2>
//       <ParentComponent/>


//     </main>
//   );
// }
// function App() {
//   return (
//     <main>
//       <h2>React & Typescript 💘</h2>
//       <Component/>


//     </main>
//   );
// }
// function App() {
//   return (
//     <Provider store={store}>
//        <main>
//       <h2>React & Typescript 💘</h2>
//       <Component/>


//     </main>
//     </Provider>
   
//   );
// }

function App() {
  return (
    // <Provider store={store}>
       <main>
      <h2>React & Typescript 💘</h2>
      <Component/>


    </main>
    // </Provider>
   
  );
}

export default App;

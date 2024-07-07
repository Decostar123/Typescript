// import { useState , useEffect } from "react" ; 
// import { Tour , TourSchema } from "./types"  ; 

// const url = 'https://www.course-api.com/react-tours-project';
//   function Component() {

//   // tours, 
//   const [ tours , setTours] = useState<Tour[]>([]) ; 
//   // initialState: never[] | (() => never[])): [never[], React.Dispatch<React.SetStateAction<never[]>
//   // the TYPE DECLARED IS NEVER WHICH MEANS THAT, I CAN HAVE VELUE OF ANY FORMAT GIVENR ARRAY IN TO THE 
//   // setTour and tours 


//   const [isLoading , setIsLoading ] = useState( false ) ;
//   // typescript, will infer the type it is smart 

//   const [ isError , setIsError ] = useState<string | null >( null) ; 
//   // null, as I am going to use an error message 


//   useEffect(()=>{
//     const fecthData = async ()=> {
//       setIsLoading( true ) ; 

//       try{
        
//         const response = await fetch(url) ; 
//         if( !response.ok){
//           throw new Error("Failed to Fetch tours...")
//         }
//         const rawData:Tour[] = await response.json() ; 

//         // now here will come the syntax to chck if the schema is matching or not to our declared schema 
//         const result = TourSchema.array().safeParse( rawData ) ; 
//         if( !result.success){
//           // {success: false}
//           // error
//           // : 
//           // (...)
//           // success
//           // : 
//           // false
//           console.log(result);
          
//           console.log(  result.error.message ) ; 
//           throw new Error( "Failed to parse ....")  ;
          
//         }

//         // {success: true, data: Array(5)}

//         console.log(result );
//         setTours( result.data )

//       }catch( error ){

//         const message = error instanceof Error ?  error.message : 'there was an error....'
//         setIsError( message)  
//       }finally{
//         setIsLoading( false ) ; 
//       }

//     console.log("iam testign the thgn");
    
//     }
//     fecthData() ;
//   } , [] )

// // we also have to set 3 returns 

// if( isLoading){
//   return <h3>Loading....</h3>
// }
// if( isError){
//   return <h3>Error  {isError}</h3>
// }
//   return (
//   <div>
//       <h2>React & Typescript</h2>
//       {
//         // one problem on the never is tat i can not run any method or the proerrt on the never witout having a proper type check 
//         // of the value, good to see the data format,it is not any 
//         tours.map((ele  , ind ) =>{
//           return <div key={ele.id}>
//               <p  className="mb-1">
//                 {ele.name}
//               </p>

//           </div>
//         })
//       }
//       <h2>Fetch Data</h2>
//     </div>
//   ) ;

// }
// export default Component;




import { fetchTours , Tour} from "./types";


import { useQuery } from "@tanstack/react-query";
import { TourSchema } from "./types";

function Component(){

  const { isPending, isError, error, data: tours  } = useQuery({
    queryKey:['tours'] , 
    queryFn : fetchTours
  })

  
  if( isPending ) return <h2>Loading.....</h2>
  if( isError ) return <h2>Error : {error.message}</h2>

  return <div>
    <h2 className="mb-1">Tours </h2>
    {
      tours.map( ( ele )=>{
        return <p className="mb-1" key={ele.id}>{ele.name}</p>
      } )
    }
  </div>

  
}

export default Component  ;
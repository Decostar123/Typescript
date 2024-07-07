// USING THE ZOD LIBRARY 
import {z} from 'zod' ;


const TourSchema = z.object( 
{
    id : z.string(),   
    name : z.string(),
    info : z.string()  ,
    image : z.string()  ,
    price : z.string() , 
    someExtraProperty : z.string() 

}
) ; 

// THERE ARE MANY OTHER METHODS, IT IS JUST LIKE SCRATCHING THE SURFACE e.g. z.string().min 


// the TourType has also come from the TourSchema , schema is like a well defined structure remebering the SQL 
//  console.log(typeof TourSchema  , "  ................ . .  . . . . . . ." );
 
type TourType = z.infer<typeof TourSchema>


async function  fecthData2( url : string) :Promise<TourType[]>{
    try {
        
        const response = await fetch( url ); 
        // fetch has intrstign set up where it not treat 404 errors as error 
        // it only treats network as error
        // so 404 will not come in the catch block  

        // alert( response.ok )
        if( !response.ok){
            // this is the check we need to do with fetch not with the axios 

            throw new Error("HTP error? status:" + response.status)
        }

        // NOTE, the type is not simple an object, but an Array Of object 

        const rawData : TourType[] = await response.json() ; 

        
        
        console.log(" the data which got was ");

        // SEE WE ARE CHECKING AT  THE RUNTIME, WHAT SHOULD HAPPEN 
        // it is like have an array of TourSchema and themn check the properties in the rawData 

        // matching the results 
        const result = TourSchema.array().safeParse( rawData )
        

        console.log(result);
        
        if( !result.success ){
            throw new Error( `Invalid data ${result.error}`)
        }
        console.log(result);
        
        return result.data  ; 

    } catch ( error ) {
        const errorMsg = error instanceof Error  ?  error.message  : "there was an error "
        console.log(error);
        return []  ; 
    }   
}
const url = 'https://www.course-api.com/react-tours-project';

const tours2 : TourType[] = await fecthData2( url )

tours2.map((ele ) => console.log(ele) ) ;

// we are checking the properties at run time ( which is amazing definately ) not the build time 

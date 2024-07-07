import { z } from "zod"
import axios from "axios"
// export the tour schema beacuse we are going to use it there 

export const TourSchema = z.object({
    id : z.string() ,
    name : z.string() ,
    image : z.string() ,
    info : z.string() ,
    price : z.string() , 
    // someting :z.string() 
})
// NOTE: THE GIVEN PROPERTIES MUST BE PRESENT, SCHNA HAS LESS PRPOERTIES AND THERE IS MORE PROPERTY IN THE 
// TYPE ARRAY WHICH I I PROVIDE IN Tourschema.array().safeParse(rawData) 

export type Tour = z.infer<typeof TourSchema>

// steps are  1) schema -> z.object 
// second is  2) then the type -> genrics, z.infer


// MILLION $ QUESTION ........ DO YOU ALWAYS NEDD TO AD ZOD FOR FETCHING DATA ? 
// HINESLTY NO. 
// FOR MOST PART WE ARE GOING TO RELY ON THE  FACT THAT THE API IS SUPPOSED TO RETURN SOME TYPE 
// BUT COME TO END WHEN WE WNAT TO DEFINATELY DEFINATELY CHECK THE PARTICULAR VALUE 


// -----------------------                          ---------------------------------------------------

const url = 'https://www.course-api.com/react-tours-project';

export const fetchTours = async function() : Promise<Tour[]>{

    const response = await axios.get<Tour[]>(url ) ; 
    // with axois the .json() + reponse.ok as the reponse was not correct fetch not cover 404, 

    console.log(" the response recevied was " , response ) ;
    
    const result = TourSchema.array().safeParse( response.data ) ; 

    if( !result.success){
        console.log(result.error.message);
        
        throw new Error(" Incorrect structure ") ; 
        
    }

    let array:Tour[] = result.data ; 
    return array ;

}


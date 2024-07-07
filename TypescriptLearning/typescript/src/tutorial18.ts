// ## Fecth  Data


async function fetchData( url : string ) {
    try{
        const response = await fetch( url ) ; 
        if( !response.ok){
            throw new Error(" HTTP error! status " + response.status) ; 
        }
        const data = await response.json() ; 
        return data ;
    }catch( error ){
        console.log(error);
        
    }
}


async function  fecthDaata1( url : string) {
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

        const data = await response.json() ; 
        
        console.log(" the data which  got was ");
        
        console.log(data);
        
        return data ; 

    } catch ( error ) {
        const errorMsg = error instanceof Error  ?  error.message  : "there was an error "
        console.log(error);
        return [] ; 
    }   
}
const url = 'https://www.course-api.com/react-tours-project';

const _tours = fecthDaata1( url )


// type fo tours in Promise<any>



const tours = await fecthDaata1( url )

// ele is giving eror as I have no info of tours 

tours.map((ele : any )=>{
    console.log(ele.name);
    
})


// ## CHALLENGE FETCH DATA
// NOW THE TASK IS TO SET UP THE CORRECT DATA TYPE FOR THE FETCH 
// SET the type: hint, ypu can use the url as refernce and also set up the proper return  type, wich is a promises ;)

type TourType = { 
    id : string ; 
    name : string ; 
    info : string ; 
    image  : string ; 
    // price : string  ;  // removed alreadu existing property 
    somethingExtra:boolean   // added an extra property  
}   

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

        const data : TourType[] = await response.json() ; 
        
        console.log(" the data which  got was ");
        
        console.log(data);
        
        return data ; 

    } catch ( error ) {
        const errorMsg = error instanceof Error  ?  error.message  : "there was an error "
        console.log(error);
        return []  ; 
    }   
}

const tours2 : TourType[] = await fecthDaata1( url )

// now here we do need to define the type of the element ele to any 
// tours2.map((ele ) => console.log(ele , ele.somethingExtra , ele.price ) )  ; // giving error on console.log of ele.price 



// now what if I added an extra property or removed an existing property 

// if i added somethingExtra property  i can access but undefined it will be 


// we do want to provide correct shape but there is no way for typescript to check ths at runtime
// at build time not guaranteee i will get the correct result
// see at the build time i am giving the extra property somethingExtra 
// there is no way for typescrpt to check the eztratype as it is coming at the run time 

// WE WILL SEE HOW WE CAN DO THE RUNTIME CHECKS WITH THE HELP OF EXTRA LIBRARY BY THE NAME OF ZOD 

// WE CAN DO IT MANUALLY, ITERATE OVER THE DATA, CHECK IF THE PROPERTY EXIST AS WELL HAS PROPER TYPE 
// EVEN THOUGH IT MAY SUOND SUPER CUTE, BUT IN REALITY IT CAN GET MESSY PREETY 
// IF WE NEED TO VALIDATE DATA , ZOD LIBRARY IS GOOD AS IT PROVIDES A LOT OF OPTIONS OUT OF BOX AN 
// IS FAR BETTER TESTED HAN OUR OWN VALIDATION CODE 

// WE CAN USE ZOD IN OTHER SCENARIOS AS WELL, EXAMPLE IN NEX JS 
// WE USE ZOD TO VALIDATE OUR SUBMISSION ONT HE CLIENT AS WELL AS SERVER 
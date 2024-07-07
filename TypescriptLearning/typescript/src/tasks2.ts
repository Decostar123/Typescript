
// Now we will select form , formInput, list 
// this is where typescript is in play, we need to set up type 

// differnce between regular project and typescript is we always have types and interfaces somewhere as 
// typescript ned to know abut the shape of data 

// alert("hi")

const taskForm = document.querySelector<HTMLFormElement>(".form")  ; 
// there is no way for typescript to know that it is form so we need to write HTMLFor mElement 
// it can not magically go to html and understand , that 's why we nned o use generic 

const formInput = document.querySelector<HTMLInputElement>(".form-input") ; 
const taskListEment = document.querySelector<HTMLUListElement>(".list") ; 


type Task = {
    description : string ; 
    isCompleted : boolean ;
} ; 

// see no DOMContenetLoaded event listener has been added, because the code will run on the initial run , can avoid that 

const taskArray : Task[] = loadTasks() ; 

// do not use for loop , better tp uses fo r each 
taskArray.forEach(( ele ) => renderTask( ele )) ;

function loadTasks(): Task[] {
    let storedTask : string | null = localStorage.getItem("tasks") ; 
    
    return storedTask ? JSON.parse(storedTask) : []  ;    


}
taskForm?.addEventListener('submit' , (event )=>{
    createTask( event ); 
    
} )


function createTask(event :SubmitEvent){

    event.preventDefault() ; 
        // write -> if complains -> ? -> if complains -> if()
    const taskDescription = formInput?.value ;
    if( taskDescription){


        // add task to list 
        const task : Task = {
            description : taskDescription , 
            isCompleted: false , 

        }
        
        addTask( task ) ; 
        
        // render task 
        renderTask( task )


        // update the localStorage 

        updateStorage() ;

        console.log(taskDescription);
        
        formInput.value = '' ; 
        return ;
    }
    alert("Please enter  a task description "); 

}
function    addTask( task : Task ){
    taskArray.push( task ) ; 

    console.log(taskArray);
    

}
// note it is receiving individual task, not array of task 

function renderTask( task : Task ) : void{
    const taskElement = document.createElement("li")  ;
    taskElement.textContent = task.description ;

    // checkbox 
    const taskCheckBox = document.createElement("input") ; 
    // test for the setAttribute property also 

    taskCheckBox.type = "checkbox"
    // SEE HOW WE ARE GETTING SUGGESTIONS AND NO NEED TOWORRY ABIUT THE ERORS WE ARE GETTING
    taskCheckBox.checked = task.isCompleted ;   
    

    taskElement.appendChild( taskCheckBox) // it is getting added inside the li, list element 
    taskListEment?.appendChild( taskElement ) ; 
    

    // toggle Checkbox

    taskCheckBox.addEventListener( "change" , ()=>{
        // see, simply just toggling one single feature 

        task.isCompleted = !task.isCompleted ;
        updateStorage() ;
        // and in the updateStirage I am simply adding the entroe again 
        // i thought of searching by the id and adding 
    })



}

function updateStorage() : void{
    // SEE NO KACHRA HERE, ALL THE THINGS ARE SET UP AT THE  STARTING NEATLY AND SWEET 

    localStorage.setItem('tasks' , JSON.stringify(taskArray))
}

// WITH THE TYPESCRCIPT MARKS COMPLETE AND WE SEE HOW TO USE TYPESCRIPT + REACT


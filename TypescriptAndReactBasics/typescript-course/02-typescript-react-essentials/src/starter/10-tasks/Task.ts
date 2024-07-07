export type Task = {
    id : string ; 
    description : string ; 
    isCompleted : boolean ;
}

    export type StateInput={
        taskList : Task[] ; 
        setTaskList(param1:Task[] | ((prev: Task[]) => Task[])   ):void ;
    }

    
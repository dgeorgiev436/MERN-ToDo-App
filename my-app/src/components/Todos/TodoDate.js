


const TodoDate = ({dateCreated, completed, completedAt}) => {

    // Trun the date into the correct Date format conditionally depending on if the task is completed
    // if completed get the completion date
    // if not completed get the creation date
    if(completed){
        var date = new Date(completedAt)
    }else{
        var date = new Date(dateCreated)
    }

    // Get month, day and year
    
    const monthCreated = date.toLocaleString("en-GB", {month: "long"});
    const dayCreated = date.toLocaleString("en-GB", {day: "2-digit"});
    const yearCreated = date.getFullYear(); 

    // if(completedAt){
    //     const dateCompleted = new Date(completedAt)
    //     const monthCompleted = dateCompleted.toLocaleString("en-GB", {month: "long"});
    //     const dayCompleted = dateCompleted.toLocaleString("en-GB", {day: "2-digit"});
    //     const yearCompleted = dateCompleted.getFullYear(); 
    // }

    // Conditional message depending on if task is completed
    const message = completed ? "Completed at" : "Created at"

    return (
        <div>
            {/* Display message and date */}
            <p> {message} : {dayCreated} of {monthCreated} - {yearCreated}</p>
        </div>
    )
}

export default TodoDate;
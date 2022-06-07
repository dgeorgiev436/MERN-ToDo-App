


const TodoDate = ({dateCreated}) => {

    // Trun the date into the correct Date format
    const date = new Date(dateCreated)

    // Get month, day and year
    const month = date.toLocaleString("en-GB", {month: "long"});
    const day = date.toLocaleString("en-GB", {day: "2-digit"});
    const year = date.getFullYear(); 

    return (

        <div>
            <p>Created at : {day} of {month} - {year}</p>
        </div>
    )
}

export default TodoDate;
import React, {useEffect, useState} from "react"
import classes from "./Todos.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getTodos} from "../../actions/todo"
import TodoItem from "./TodoItem"
import AddTodo from "../TodoForm/AddTodo"

const Todos = ({getTodos, todoState: {todos}}) => {

    const [isForm, setIsForm] = useState(false)

    useEffect(() => {
        getTodos();
    }, [getTodos])

    const showFormHandler = () => {

        setIsForm(() => {
           return !isForm
        })

    }


    // If there are no todos, return no expenses message
    // if(!todos || todos.length === 0){
    //     return <h2>No Expenses Found</h2>
    // }

    const h1Message = todos != null && todos.length > 0 ? "All todos" : "No todos found"

    return(
        <div>
            <button onClick={showFormHandler}>{isForm ? "Hide form" : "Add Todo"}</button>
            { isForm && <AddTodo />}
            <h1>{h1Message}</h1>
            <ul>
                {todos && todos.map(todo => 
                    <TodoItem 
                        key={todo._id} 
                        id={todo._id} 
                        dateCreated={todo.created_at} 
                        title={todo.title} 
                        completed={todo.completed} 
                        completedAt={todo.completed_at}>
                    </TodoItem>
                )}
            </ul>
        </div>
    )
}

// Get current state
const mapStateToProps = state => ({
    todoState: state.todo
})

// Add types
AddTodo.propTypes = {
    todoState: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {getTodos})(Todos);
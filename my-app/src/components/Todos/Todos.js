import React, {useEffect} from "react"
import classes from "./Todos.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getTodos} from "../../actions/todo"
import TodoItem from "./TodoItem"

const AddTodo = ({getTodos, todoState: {todos}}) => {

    useEffect(() => {
        getTodos();
    }, [getTodos])


    // If there are no todos, return no expenses message
    if(!todos || todos.length === 0){
        return <h2>No Expenses Found</h2>
    }

    return(
        <div>
            <h1>All Todos</h1>
            <ul>
                {todos && todos.map(todo => <TodoItem key={todo._id} id={todo._id} dateCreated={todo.created_at} title={todo.title}>{todo.title}</TodoItem>)}
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

export default connect(mapStateToProps, {getTodos})(AddTodo);
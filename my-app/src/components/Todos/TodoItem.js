import classes from "./TodoItem.module.css"
import {deleteTodo} from "../../actions/todo"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import TodoDate from "./TodoDate"


const TodoItem = ({title, id, deleteTodo, dateCreated}) => {

    const deleteTodoHandler = () => {
        deleteTodo(id)
    }

    return(
        <li>
            <button onClick={deleteTodoHandler}>Delete Todo</button>
            <TodoDate dateCreated={dateCreated}></TodoDate>
            <div className={classes.expenseItem}>
                <h2>{title}</h2>
            </div>
        </li>
    )
}

// Set types
TodoItem.propTypes = {
    deleteTodo: PropTypes.func.isRequired
}

export default connect(null,{deleteTodo})(TodoItem);
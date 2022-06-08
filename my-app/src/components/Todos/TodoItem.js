import classes from "./TodoItem.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import TodoDate from "./TodoDate"
import {completeTodo, uncompleteTodo, deleteTodo} from "../../actions/todo"


const TodoItem = ({title, id, deleteTodo, dateCreated, completeTodo, uncompleteTodo, completed, completedAt}) => {

    const deleteTodoHandler = () => {
        deleteTodo(id)
    }
    
    const onChangeStatusHandler = (e) => {

        if(e.target.checked){
            completeTodo(id);
        }else{
            uncompleteTodo(id);
        }
    }


    return(
        <li>
            <h2>{title}</h2>
            <input type="checkbox" form="form" onChange={onChangeStatusHandler}/>
            <button onClick={deleteTodoHandler}>Delete Todo</button>
            <TodoDate completed={completed} completedAt={completedAt} dateCreated={dateCreated}></TodoDate>
        </li>
    )
}

// Set types
TodoItem.propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    uncompleteTodo: PropTypes.func.isRequired
}

export default connect(null,{deleteTodo, completeTodo, uncompleteTodo})(TodoItem);
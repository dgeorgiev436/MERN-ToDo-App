import React, { useRef} from "react"
import classes from "./AddTodo.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {addTodo} from "../../actions/todo"

const AddTodo = ({addTodo}) => {

    const titleRef = useRef("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        addTodo(titleRef.current.value);
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <input ref={titleRef} type="text" placeholder="Enter title"/>
            <button>Submit</button>
        </form>
    )
}


AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(null, {addTodo})(AddTodo);
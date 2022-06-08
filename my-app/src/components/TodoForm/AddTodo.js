import React, {useEffect} from "react"
import classes from "./AddTodo.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {addTodo} from "../../actions/todo"

const AddTodo = ({addTodo}) => {

    useEffect(() => {
        
    }, [])

    return(
        <form>
            <input type="text" placeholder="Enter title"/>
            <button>Submit</button>
        </form>
    )
}

const mapStateToProps = state => ({

})

AddTodo.propTypes = {

}

export default connect(mapStateToProps, {addTodo})(AddTodo);
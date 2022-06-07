import React, {useEffect} from "react"
import classes from "./AddTodo.module.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {addTodo} from "../../actions/todo"

const AddTodo = ({addTodo}) => {

    useEffect(() => {
        
    }, [])

    return(
        <div>
            adsasddsadsa
        </div>
    )
}

const mapStateToProps = state => ({

})

AddTodo.propTypes = {

}

export default connect(mapStateToProps, {addTodo})(AddTodo);
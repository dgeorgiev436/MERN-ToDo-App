import axios from "axios"
import {ADD_TODO, GET_ALL_TODOS, GET_ALL_TODOS_ERROR, ADD_TODO_ERROR, DELETE_TODO_ERROR, DELETE_TODO, UPDATE_TODO_STATUS, UPDATE_TODO_STATUS_ERROR} from "./types"



// Get all Todos
export const getTodos = () => async dispatch => {
    try{
        // Send get request
        const res = await axios.get("/api/tasks");

        // Dispatch the todos to the reducer
        dispatch({
            type: GET_ALL_TODOS,
            payload: res.data
        });


    }catch(err){
        
        dispatch({
			type: GET_ALL_TODOS_ERROR
		})
    }
}

// Add Todo
export const addTodo = (title) => async dispatch => {

    // Setting up headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({title})

    try{
        // Send post request with axios
        // The post request includes the route, the body, and the header configuration
        const res = await axios.post("/api/tasks", body, config);

        // Dispatch 
        dispatch({
            type: ADD_TODO
        })
    }catch(err){

        dispatch({
            type: ADD_TODO_ERROR
        });

    }
}

// Delete Todo
export const deleteTodo = (id) => async dispatch => {

    try{
        // Send delete request and delete Todo based on ID
        await axios.delete(`/api/tasks/${id}`);

        dispatch({
            type: DELETE_TODO,
            payload: id
        })

    }catch(err){


        dispatch({
			type: DELETE_TODO_ERROR
		})
    }
}

// Update Todo Status
export const updateStatus = (id) => async dispatch => {

    try{

        await axios.put(`/api/tasks/${id}/status`);

        dispatch({
            type: UPDATE_TODO_STATUS,
            payload: id
        })

    }catch(err){

        dispatch({
            type: UPDATE_TODO_STATUS_ERROR,
        })
        console.log(err);

    }
}
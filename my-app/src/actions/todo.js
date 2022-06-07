import axios from "axios"
import {ADD_TODO, REMOVE_TODO} from "./types"



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
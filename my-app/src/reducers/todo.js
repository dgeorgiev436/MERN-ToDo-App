import {REMOVE_TODO, GET_ALL_TODOS, GET_ALL_TODOS_ERROR, DELETE_TODO, UPDATE_TODO_STATUS, UPDATE_TODO_STATUS_ERROR} from "../actions/types"

const initialState = {
    loading: true,
    todos: null
}

export default function(state = initialState, action){

    const {type, payload} = action;

    switch(type){
        case GET_ALL_TODOS:
            return {...state, loading: false, todos: payload}
        case UPDATE_TODO_STATUS:
            return {...state, loading: false, todos: state.todos.map((todo) => { 
                if(todo._id === payload){
                   return {...todo, completed: !todo.completed}
                }else{
                    return todo
                }
            })}
        case GET_ALL_TODOS_ERROR:
            return {...state, loading: false, todos: null}
        case DELETE_TODO:
            return {...state, loading: false, todos: state.todos.filter(todo => todo._id !== payload)}
        default:
            return state;
    }

}
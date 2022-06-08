import {REMOVE_TODO, GET_ALL_TODOS, GET_ALL_TODOS_ERROR, DELETE_TODO, COMPLETE_TODO, COMPLETE_TODO_ERROR, UNCOMPLETE_TODO, UNCOMPLETE_TODO_ERROR} from "../actions/types"

const initialState = {
    loading: true,
    todos: null
}

export default function(state = initialState, action){

    const {type, payload} = action;

    switch(type){
        case GET_ALL_TODOS:
            return {...state, loading: false, todos: payload}
        case COMPLETE_TODO:
            return {...state, loading: false, todos: state.todos.map((todo) => { 
                if(todo._id === payload){
                   return {...todo, completed: true, completed_at: new Date(Date.now())}
                }else{
                    return todo
                }
            })};
        case UNCOMPLETE_TODO:
            return {...state, loading: false, todos: state.todos.map((todo) => {
                if(todo._id === payload){
                    return {...todo, completed: false, completed_at: null};
                }else{
                    return todo
                }
            })};
        case GET_ALL_TODOS_ERROR:
            return {...state, loading: false, todos: null}
        case DELETE_TODO:
            return {...state, loading: false, todos: state.todos.filter(todo => todo._id !== payload)}
        case COMPLETE_TODO_ERROR:
        case UNCOMPLETE_TODO_ERROR:
            return {...state, loading: false}
        default:
            return state;
    }

}
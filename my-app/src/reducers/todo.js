import {ADD_TODO, REMOVE_TODO, ADD_TODO_ERROR};

const initialState = {
    loading: true,
    todos: null
}

export default function(state = initialState, action){

    const {type, payload} = action;

    switch(type){
        case GET_ALL_TODOS:
            return {...state, loading: false, todos: payload}
        case GET_ALL_TODOS_ERROR:
            return {...state, loading: false, todos: null}
        default:
            return state;
    }

}
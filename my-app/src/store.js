import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

// Setting up the initial state
const initialState = {};

// setting the thunk middleware
const middleware = [thunk];

// Setup store and devtools extension
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;
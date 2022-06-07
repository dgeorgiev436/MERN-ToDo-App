import './App.css';
import {Routes, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import AddTodo from "./components/TodoForm/AddTodo"
import Todos from "./components/Todos/Todos"

function App() {
  return (
    <Provider store={store} >
      <Routes>
        <Route exact path="/" element={<Todos />}/>
        {/* <Route exact path="/addTodo" element={<AddTodo />} /> */}
      </Routes>
    </Provider>
  );
}

export default App;

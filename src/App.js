import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import logo from './platzi.webp';
import { TodoItem } from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch /> 
      
      <TodoList>

    <TodoItem/>
    <TodoItem/>
    <TodoItem/>

      </TodoList>
      {/* <CreateTodoButton/> */}
    </div>
  );
}


export default App;

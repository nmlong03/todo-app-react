import './App.css';
import Add from './components/Add';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App container mx-auto w-[500px]">
    <h1 className='text-center text-2xl mb-3 font-bold mx-auto'>To do app</h1>
    <Filter />
    <TodoList />
    <Add />
    </div>
    
  );
}

export default App;

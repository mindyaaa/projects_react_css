import './App.css';
import React,{ useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header 
        filter={filter} 
        filters={filters} 
        onFilterChange={ (filter) => setFilter(filter) }/>
      <TodoList filter={filter} />
    </DarkModeProvider> 
  ); 
}

export default App;

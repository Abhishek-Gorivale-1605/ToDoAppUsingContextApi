import React from 'react'
import TodoContextProvider from './context/TodoContextProvider'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css';
import './index.css';
function App() {
  return (
    <TodoContextProvider>
      <TodoInput />
      <TodoList />
    </TodoContextProvider>
  )
}

export default App

import React, { useState } from 'react'
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';


export default function TodoApp() {

  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Walk the dog", completed: true },
    { id: 3, task: "Draw some art", completed: false },
  ]
  const [todosApp, setTodos] = useState(initialTodos)
  const addTodo = newTodoText => {
    setTodos([...todosApp, { id: uuid(), task: newTodoText, completed: false }])
  }

  const removeTodo = (todoId) => {
    //filter out removed todo
    const updatedTodos = todosApp.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos)
  }

  const toggleTodo = (todoId) => {
    const updatedTodos = todosApp.map(todo => (
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    ))
      setTodos(updatedTodos)
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todo with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{marginTop: "1rem"}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todosApp={todosApp} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Grid>
      </Grid>
    </Paper>
  )
}

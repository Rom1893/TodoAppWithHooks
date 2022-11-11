import { useState } from "react"
import useLocalStorage from "./useLocalStorage";
import { v4 as uuid } from 'uuid';

export default initialTodos => {
    const [todosApp, setTodos] = useLocalStorage("todos", initialTodos)
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
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        ))
        setTodos(updatedTodos)
    }

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todosApp.map(todo => (
            todo.id === todoId ? { ...todo, task: newTask } : todo
        ))
        setTodos(updatedTodos)
    }
    return {
        todosApp,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo,
    }
}




import React from 'react'
import TextField from '@mui/material/TextField';
import useInputState from "../hooks/useInputState"

export default function EditTodoForm({ editTodo, id, task, toggleEdit }) {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEdit();
        }
        }
        style={{marginLeft: ".7rem", width: "90%"}}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}

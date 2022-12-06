import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from './TodoList.module.css';

export default function TodoList ({filter}) {
    const [todos, setTodos] = useState(readTodos);

    const addTodo = (todo) => {
        // console.log(todo);
        setTodos([...todos, todo]);
    }

    const handleUpdate = (updated) => {
        const updateTodo = todos.map((item) => 
            (item.id === updated.id ? updated : item)
        );
        setTodos(updateTodo);
    };

    const handleDelete = (deleted) => {
        const deleteTodo = todos.filter((item) => 
            (item.id !== deleted.id)
        );
        setTodos(deleteTodo);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])
    
    const filtered = getFilteredItems(todos, filter);
    
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
            {filtered.map(item => (
                <Todo
                key={item.id}
                todo={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                />
            ))}
            </ul>

            <AddTodo onAdd={addTodo} />
        </section>

    )

}

const readTodos = () => {
    const todos = localStorage.getItem('todos');
    return (todos ? JSON.parse(todos) : []);
}


const getFilteredItems = (todos, filter) => {
    if (filter === 'all') {
        return todos;
    }

    return todos.filter((item) => item.status === filter)
}


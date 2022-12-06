import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import { HiMoon, HiSun } from 'react-icons/hi';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {

    const {status, text, id} = todo;

    const changeHandler = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
        // console.log(todo);
    };

    const deleteHandler = () => {
        console.log('deleted');
        onDelete(todo);
    }

    return (
        <li className={styles.todo}>
            <input
            className={styles.checkbox}
            checked={status === 'completed'}
            onChange={changeHandler}
            id={id}
            type="checkbox" />
            <label className={styles.text} htmlFor={id}>{text}</label>
            <span className={styles.icon}>
            <button className={styles.button} onClick={deleteHandler}>
                <FaTrashAlt/>
            </button>
            </span>
        </li>
    );
}
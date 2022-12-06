import React, {useState} from "react";
import styles from './AddTodo.module.css';


export default function AddTodo ({onAdd}) {
    const [text, setText] = useState('');


    const changeHandler = (e) => {
        setText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log('length', text.trim().length);

        if (text.trim().length === 0) {
            alert('please write sth');
            return
        }

        onAdd({
            id : new Date().getTime(),
            text : text.trim(),
            status :'active'
        });

        setText('');


    }

    return (
    <form className={styles.form} type="submit" onSubmit={submitHandler}>
        <input className={styles.input} placeholder="Add to do" type="text" value={text} onChange={changeHandler} />
        <button className={styles.button}>추가하기</button>
    </form>
    )
}
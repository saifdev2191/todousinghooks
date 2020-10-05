import React, { useState, useContext, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from '../context';
import './todolist.css';

const Addtodo = () => {
	const { state, dispatch } = useContext(TodoContext);
	const [note, setNote] = useState('');
	const inputRef = useRef();

	useEffect(() => {
		// console.log(state.currentTodo.id)
		if (state.currentTodo.text) {
			setNote(state.currentTodo.text);
		} else {
			setNote('');
		}
	}, [state.currentTodo.id]);

	const addNote = e => {
		setNote(e.target.value);
	};

	const submitNote = e => {
		e.preventDefault();
		if (state.currentTodo.text) {
			dispatch({
				type: 'EDITMOD',
				payload: {
					id: state.currentTodo.id,
					text: note
				}
			});
		} else {
			dispatch({
				type: 'ADDTODO',
				payload: {
					id: uuidv4(),
					text: note
				}
			});
		}
		setNote('');
	};

	// (() => {
	//     if(state.currentTodo.hasOwnProperty('text')){
	//        setEdit(true)
	//     }
	//     else{
	//        setEdit(false)
	//     }
	// })()

	return (
		<div className='formStyle'>
			<form>
				<input
					type='text'
					placeholder='Add Note'
					onChange={e => addNote(e)}
					value={note}
				>
					{/* ref = {inputRef} */}
				</input>
				<button onClick={e => submitNote(e)}>Add Note</button>
			</form>
		</div>
	);
};

export default Addtodo;

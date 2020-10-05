import React, { useContext, useRef } from 'react';
import TodoContext from '../context';
import './todolist.css';


const Todolist = () => {
	const { state, dispatch } = useContext(TodoContext);

	const deleteNote = (id) => {
		dispatch({ type: 'REMOVETODO', payload: id })
		console.log(state)
	}	
	return (
		<div className='todocontainer'>
			{state.todo.length === 0 ? (
				<h1 className='todoeachcontainer'>Nothing to show</h1>
			) : (
				<h1 className='todoeachcontainer'>{state.todo.length} Todos</h1>
			)}
			{state.todo.map(el => (
				<div
					key={el.id}
					className={`todoeachcontainer ${el.completed ? 'completed' : ''}`}
				>
					<span
						className='todolist'
						onDoubleClick={() =>
							dispatch({ type: 'TOGGLETODO', payload: el.id })
						}
					>
						{el.completed ? <del>{el.text}</del> : el.text}
					</span>

					<div className='actions'>
						<span
							style={{ paddingRight: '10px' }}
							onClick={() => dispatch({ type: 'EDITTODO', payload: el })}
						>
							Edit
						</span>
						<span
							onClick={() => deleteNote(el.id)}
						>
							Delete
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Todolist;

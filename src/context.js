import React from 'react';

const TodoContext = React.createContext({
	todo: [
		{ id: 1, text: 'wfh', completed: true },
		{ id: 2, text: 'snack', completed: true },
		{ id: 3, text: 'cycling', completed: false }
	],
	currentTodo: {}
});

export default TodoContext;

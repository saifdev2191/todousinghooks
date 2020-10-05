import React, { useContext, useReducer } from 'react';
import TodoContext from './context';
import reducer from './reducer';

import Todolist from './components/todolist';
import Addtodo from './components/Todoform.js'

//This is our main compoennt where we use useContext hooks, context API and useReducer to initialize the global state. Here we are passing state and
//dispatch methods to all the child component of App using Provider.
//Becuse of dispatch methhod and state any child component can change the global state.
const App = () => {
	const initialState = useContext(TodoContext);
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			<Addtodo />
			<Todolist />
		</TodoContext.Provider>
	);
};

export default App;

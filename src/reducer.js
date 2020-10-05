const reducer = (state, action) => {
	const { todo, currentTodo } = state;
	const { type, payload } = action;

	switch (type) {
		case 'TOGGLETODO':
			const newState = todo.map(el => {
				if (el.id === payload) {
					return {
						...el,
						completed: !el.completed
					};
				}
				return el;
			});
			return {
				...state,
				todo: newState
			};
		case 'REMOVETODO':
			const clearInputOnDeleteFlag =
				state.currentTodo.id === payload ? {} : state.currentTodo;
			return {
				...state,
				todo: todo.filter(el => el.id !== payload),
				currentTodo: clearInputOnDeleteFlag
			};
		case 'ADDTODO':
			//check for repeated notes
			const repeatedNoteflag = state.todo.find(el => el.text === payload.text);
			//donot add empty todo
			if (payload.text && !repeatedNoteflag) {
				todo.push({
					id: payload.id,
					text: payload.text,
					completed: false
				});
			}
			return {
				...state,
				todo: todo
			};

		case 'EDITTODO':
			return {
				...state,
				currentTodo: payload
			};

		case 'EDITMOD':
			const editmodd = todo.map(el => {
				if (el.id === payload.id) {
					return {
						...el,
						text: payload.text
					};
				}
				return el;
			});
			return {
				...state,
				todo: editmodd,
				currentTodo: {}
			};
		default:
			return state;
	}
};

export default reducer;

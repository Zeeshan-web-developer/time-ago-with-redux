const initialState = {
  todos: [],
};
const root_reudcer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default: {
      return state;
    }
  }
};
export default root_reudcer;

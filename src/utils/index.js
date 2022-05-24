const completeTodo = (text, todos, setTodos) => {
  const todoIndex = todos.findIndex((todo) => todo.text === text);

  const newTodos = [...todos];
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  setTodos(newTodos);
};

const deleteTodo = (text, todos, setTodos) => {
  const todoIndex = todos.findIndex((todo) => todo.text === text);

  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
};

export { completeTodo, deleteTodo };

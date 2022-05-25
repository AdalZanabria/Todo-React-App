import { useState, useEffect } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useLocalStorage } from "./hooks/useLocalStorage";
// import { completeTodo, deleteTodo } from "./utils";

// const defaultTodos = [
//   { text: "Agregar persistencia a los datos.", completed: false },
//   { text: "Practicar el manejo del estado.", completed: false },
//   { text: "Practicar el React Hook useEffect.", completed: false },
//   { text: "Conseguir nuevos proyectos.", completed: false },
//   { text: "Mejorar mi LikedIn.", completed: false },
// ];

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    });
  }

  // console.log("Render antes del use effect.");
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [totalTodos]);
  // console.log("Render luego del sue effect.");

  return (
    <div className="main-container">
      <header>
        <h1 className="title">To Do React App</h1>
        <p className="subtitle">Con React y TailwindCSS</p>
      </header>
      <main>
        <section className="glass p-4 flex flex-col justify-center items-center">
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {error && <p>Desesperate, si hubo un error.</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {!loading && !searchedTodos.length && <p>Crea tu primer To Do.</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />
        </section>
      </main>
      <footer>
        <p className="text-center text-violet-600">
          Adalberto Zanabria Castro, 2022.
        </p>
      </footer>
    </div>
  );
}

export default App;

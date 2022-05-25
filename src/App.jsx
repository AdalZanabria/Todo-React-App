import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoContext } from "./context/TodoContext";
import { useContext } from "react";

function App() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);
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
          <TodoCounter />
          <TodoSearch />

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

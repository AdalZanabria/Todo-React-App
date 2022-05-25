import { useContext } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { TodoContext } from "./context/TodoContext";
import { CogIcon } from "@heroicons/react/solid";
import { ArrowDownIcon } from "@heroicons/react/solid";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  // console.log("Render antes del use effect.");
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [totalTodos]);
  // console.log("Render luego del sue effect.");

  return (
    <div className="main-container">
      <header>
        <h1 className="title">To-Do React App</h1>
        <p className="subtitle">Con React y TailwindCSS</p>
      </header>
      <main>
        <section className="max-w-xs md:max-w-full glass p-4 flex flex-col justify-center items-center">
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {error && (
              <p className="text-red-500 font-bold">Error al cargar To-Dos.</p>
            )}
            {loading && (
              <div className="flex">
                <CogIcon className="animate-spin-slow text-violet-600 w-6 h-6 mr-2" />
                <p className="text-violet-600">Cargando To-Dos...</p>
              </div>
            )}
            {!loading && !searchedTodos.length && (
              <div className="flex flex-col justify-center items-center text-violet-600/80">
                <p>No se encontró ningún To-Do</p>
                <p>Puedes crear uno haciendo click en este botón</p>
                <ArrowDownIcon className="h-5 w-5 animate-bounce m-2" />
              </div>
            )}

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

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

          <CreateTodoButton />
        </section>
      </main>
      <footer className="flex flex-col justify-center items-center text-violet-600 text-sm">
        <p>Adalberto Zanabria Castro, 2022.</p>
        <ul className="flex justify-center items-center text-3xl">
          <li className="hover:text-violet-900 active:text-pink-600 transition ease-in-out duration-300">
            <a href="https://github.com/AdalZanabria">
              <TiSocialGithubCircular />
            </a>
          </li>
          <li className="hover:text-violet-900 active:text-pink-600 transition ease-in-out duration-300">
            <a href="https://www.linkedin.com/in/adal-zanabria/">
              <TiSocialLinkedinCircular />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

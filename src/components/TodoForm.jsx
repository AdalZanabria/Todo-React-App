import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { Button } from "./Button";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-4 flex flex-col justify-center items-center rounded-lg shadow-lg gap-4 w-4/5 sm:w-1/2 lg:w-1/3"
    >
      <label className="text-violet-600 font-bold">Nuevo To-Do</label>
      <textarea
        placeholder="Escribe aquí tu nuevo to-do."
        value={newTodoValue}
        onChange={onChange}
        className="w-full placeholder:italic p-2 outline-2 outline outline-pink-200 hover:outline-pink-300"
      />
      <div className="flex gap-4">
        <Button text={"Cancelar"} submit={false} onClick={onCancel} />
        <Button text={"Añadir"} submit={true} />
      </div>
    </form>
  );
}

export { TodoForm };

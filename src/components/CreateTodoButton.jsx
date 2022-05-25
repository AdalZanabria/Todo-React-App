import { PlusCircleIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal(!openModal);
  };
  return (
    <PlusCircleIcon
      className="w-14 h-14 text-violet-300 hover:text-violet-600 hover:scale-110 transition ease-in-out duration-300 cursor-pointer hover:rotate-90"
      onClick={onClickButton}
    />
  );
}

export { CreateTodoButton };

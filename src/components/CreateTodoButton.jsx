import { PlusCircleIcon } from "@heroicons/react/solid";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <PlusCircleIcon
      className="w-14 h-14 text-violet-300 hover:text-violet-600 hover:scale-110 transition ease-in-out duration-300 cursor-pointer"
      onClick={() => onClickButton("Aquí se debería de abrir el modal.")}
    />
  );
}

export { CreateTodoButton };

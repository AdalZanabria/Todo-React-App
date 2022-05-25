import { ArrowDownIcon } from "@heroicons/react/solid";


function TodoEmpty() {
  return (
    <div className="flex flex-col justify-center items-center text-violet-600/80">
      <p>No se encontró ningún To-Do</p>
      <p>Puedes crear uno haciendo click en este botón</p>
      <ArrowDownIcon className="h-5 w-5 animate-bounce m-2" />
    </div>
  );
}

export { TodoEmpty };

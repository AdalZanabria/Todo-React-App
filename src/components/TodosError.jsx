import { ExclamationCircleIcon } from "@heroicons/react/solid";

function TodosError({ error }) {
  return (
    <div className="text-red-500">
      <ExclamationCircleIcon className="h-7 w-7" />
      <p className="font-bold">Error al cargar To-Dos.</p>
    </div>
  );
}

export { TodosError };

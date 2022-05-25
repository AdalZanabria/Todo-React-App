import {
  CheckCircleIcon,
  XCircleIcon,
  SparklesIcon,
} from "@heroicons/react/solid";

function TodoItem(props) {
  return (
    <li className="bg-white p-4 m-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-300">
      <p
        className={`${
          props.completed
            ? "line-through text-green-600 whitespace-pre-line break-words"
            : "text-violet-600 whitespace-pre-line break-words"
        }`}
      >
        {props.text}
      </p>
      <div className="flex justify-end mt-2">
        {props.completed && (
          <div className="flex gap-1 text-yellow-600/80 mr-4 text-sm">
            <p>To-Do completado!</p>
            <SparklesIcon className="w-5 h-5" />
          </div>
        )}
        <CheckCircleIcon
          className={
            props.completed
              ? "text-green-600  w-6 h-6 hover:text-green-700 active:text-green-800 transition ease-in-out duration-300"
              : "text-green-300 w-6 h-6 hover:text-green-500 active:text-green-700 transition ease-in-out duration-300"
          }
          onClick={props.onComplete}
        />
        <XCircleIcon
          className="w-6 h-6 text-pink-300 hover:text-red-500 active:text-red-700 transition ease-in-out duration-300"
          onClick={props.onDelete}
        />
      </div>
    </li>
  );
}

export { TodoItem };

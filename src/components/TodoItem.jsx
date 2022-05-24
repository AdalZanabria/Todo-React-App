import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

function TodoItem(props) {

  return (
    <li className="bg-white p-4 m-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
      <p
        className={`${
          props.completed ? "line-through text-green-600" : "text-violet-600"
        }`}
      >
        {props.text}
      </p>
      <div className="flex justify-end mt-2">
        <CheckCircleIcon
          className={`w-6 h-6 text-green-300 hover:text-green-500 transition ease-in-out duration-300 ${
            props.completed && "text-green-600"
          }`}
          onClick={props.onComplete}
        />
        <XCircleIcon
          className="w-6 h-6 text-pink-300 hover:text-red-500 transition ease-in-out duration-300"
          onClick={props.onDelete}
        />
      </div>
    </li>
  );
}

export { TodoItem };

import {useContext} from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="text-violet-600 text-center font-semibold">
      Has completado {completedTodos} de {totalTodos} ToDos
    </h2>
  );
}

export { TodoCounter };

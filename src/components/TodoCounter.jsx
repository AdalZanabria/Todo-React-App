function TodoCounter({ total, completed }) {
  return (
    <h2 className="text-violet-600 text-center font-semibold">
      Has completado {completed} de {total} ToDos
    </h2>
  );
}

export { TodoCounter };

function TodoList(props) {
  return (
    <div className="max-w-screen-sm">
      <ul className="w-full">{props.children}</ul>
    </div>
  );
}

export { TodoList };

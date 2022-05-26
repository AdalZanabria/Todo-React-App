import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="min-w-[50%] m-4 rounded-lg p-2 outline outline-pink-200 shadow-lg focus:outline-pink-400 focus:scale-110 focus:shadow-xl transition ease-in-out duration-300 text-violet-600 placeholder:italic placeholder:text-violet-500"
      placeholder="Buscar un To-Do"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };

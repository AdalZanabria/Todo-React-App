function Button({text, submit, onClick = undefined}) {
  return (
    <button
      className="
        bg-pink-200
        hover:bg-pink-300
        outline
        outline-2
        outline-pink-300/75
        p-2
        rounded-lg
        text-violet-600
        font-semibold
        hover:text-white
        hover:outline-pink-400/75
        active:bg-pink-400
        active:outline-pink-500/75
        ease-in-out
        duration-300"
      type={submit ? "submit" : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export { Button };

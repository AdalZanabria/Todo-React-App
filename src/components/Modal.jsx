import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="bg-black/40 fixed -top-3 -left-3 -right-3 -bottom-3 flex justify-center items-center">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };

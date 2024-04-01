import { useRef } from "react";

export const FocusScreen = () => {

  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.select();
  };  

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
      ref={inputRef}
        type="text" 
        className="form-control"
        placeholder="Ingrese su nombre"
      />
      <button
        className="mt-2 btn btn-info"
        onClick={onClick}
      >
        Set Focus
      </button>
    </>
  )
}

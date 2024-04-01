import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  });

  const onFormSubmit = (event) => {
     event.preventDefault();

     if (description.length <= 1) return

     const newTodo = {
      done: false,
      id: new Date().getTime()*3,
      description
     }

     onNewTodo(newTodo);
     onResetForm()
  };
  

  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="form-control"
        type="text"
        value={description}
        name="description"
        onChange={onInputChange}
        placeholder="Que hay que hacer?"
      />
      <button 
        type="submit"
        className="btn btn-outline-primary mt-2"
      >
        Agregar
      </button>
    </form>
  )
}

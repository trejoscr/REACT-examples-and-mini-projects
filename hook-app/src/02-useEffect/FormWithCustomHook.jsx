import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: '',
  });
  
  return (
    <>
      <h1>Form With Custom Hook</h1>
      <input 
        type="text"
        className="form-control mt-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input 
        type="email"
        className="form-control mt-2"
        placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input 
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-danger mt-2">Reset</button>

    </>
  )
}

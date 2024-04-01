import { useEffect, useState } from "react"
import {Message} from './Message'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'andres',
    email: 'amtre93@gmail.com'
  })

  const {username, email} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    })
  };

  useEffect(() => {
    //console.log('useEffect called');
  }, []);

  useEffect(() => {
    //console.log('formState changed');
  }, [formState])  

  useEffect(() => {
    //console.log('email changed');
  }, [email])
  
  return (
    <>
      <h1>Simple Form</h1>

      {
        username === 'andres1' && <Message/>
      }

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

    </>
  )
}

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Andres MT');

    navigate(lastPath, {
      replace: true
    })  
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1>Login Page</h1>
            <hr />
            <button
              onClick={onLogin}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

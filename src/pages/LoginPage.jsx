import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../components/auth/index";

export const LoginPage = () => {
  const { login } = useContext( AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {
    login('Alexis Andermatten');
    navigate('/',{
      replace:true
    });
  }

  return (
    <>
      <h1>Iniciar Sesion</h1>

      <button onClick={ onLogin }>
          Iniciar Sesion
        </button>
    </>
  )
}

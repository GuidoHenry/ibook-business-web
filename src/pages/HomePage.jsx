import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../components/auth/index";

export const HomePage = () => {
  const { logout } = useContext( AuthContext)
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login',{
      replace:true
    });
  }

  return (
    <>
      <h1>HomePage</h1>

      <button onClick={ onLogout }>
        Cerrar Sesion
      </button>
    </>
  )
}

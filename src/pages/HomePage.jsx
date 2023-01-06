import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../components/auth/index";
import Layout from "../components/home/Layout";

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
    <div style={{backgroundColor:'#FFFFFF'}}>
      <h1>HomePage</h1>
      <Layout/>
      <button onClick={ onLogout }>
        Cerrar Sesion
      </button>
    </div>
    </>
  )
}

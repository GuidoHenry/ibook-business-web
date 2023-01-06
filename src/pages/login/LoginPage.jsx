import { Box, Button, Container,Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../components/auth/index";
import InputText from "../../components/common/InputText";
import './login.css'

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
      <Container component="main" maxWidth='xs'>
        
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Ingresá a tu cuenta
          </Typography>
          <Box component="form" onSubmit={()=>onLogin()}  noValidate sx={{ mt: 1 }}>
            <InputText
              margin="normal"
              required
              id="email"
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <InputText
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, height:'53px', backgroundColor:'#22C676', color:'#FFFFFF', fontWeight:700, ":hover":{backgroundColor:'#22C676'} }}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

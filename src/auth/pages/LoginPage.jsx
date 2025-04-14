import { Link as RouterLink } from 'react-router';
import { Button, Box, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar sesión">
      <form>
          <Box sx={{ mt: 2 }}>
            <TextField label="Correo" type="email" placeholder="correo@google.com" sx={{ width: "100%" }} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <TextField label="Contraseña" type="password" placeholder="Contraseña" sx={{ width: "100%" }} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, mt: 1 }}>
            <Box sx={{ width: "48%", mr: 1 }}>
              <Button variant="contained" sx={{ width: "100%" }}>
                Ingresar
              </Button>
            </Box>
            <Box sx={{ width: "48%", ml: 1 }}>
              <Button variant="contained" sx={{ width: "100%" }}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Link component={RouterLink} to="/auth/register" color="inherit">
              Crear una cuenta
            </Link>
          </Box>
        </form>
    </AuthLayout>
  );
};
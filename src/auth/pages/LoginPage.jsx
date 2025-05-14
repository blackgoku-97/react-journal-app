import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router';
import { Alert, Button, Box, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Iniciar sesión">
      <form onSubmit={onSubmit}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 1, sm: 2, md: 3 },
        }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            sx={{
              width: "100%",
              mb: 2,
              '& .MuiInputBase-input': {
                fontSize: { xs: '1.2rem', sm: '1rem' },
                padding: { xs: '10px', sm: '8px' },
              },
            }}
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            sx={{
              width: "100%",
              mb: 2,
              '& .MuiInputBase-input': {
                fontSize: { xs: '1.2rem', sm: '1rem' },
                padding: { xs: '10px', sm: '8px' },
              },
            }}
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <Box sx={{ display: errorMessage ? "" : "none", mb: 2 }}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: "100%",
              padding: { xs: '10px', sm: '8px' },
              fontSize: { xs: '1.2rem', sm: '1rem' },
              mb: 2,
            }}
            type="submit"
            disabled={isAuthenticating}
          >
            Ingresar
          </Button>
          <Button
            size="large"
            variant="contained"
            sx={{
              width: "100%",
              padding: { xs: '10px', sm: '8px' },
              fontSize: { xs: '1.2rem', sm: '1rem' },
              mb: 2,
            }}
            onClick={onGoogleSignIn}
            disabled={isAuthenticating}
          >
            <Google />
            <Typography sx={{ ml: 1 }}>Google</Typography>
          </Button>
          <Link component={RouterLink} to="/auth/register" color="inherit">
            Crear una cuenta
          </Link>
        </Box>
      </form>
    </AuthLayout>
  );
};
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router';
import { Alert, Button, Box, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: "harry@google.com",
  password: "123456",
  displayName: "Harry Potter",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener un @"],
  password: [(value) => value.length >= 6, "El password debe de tener más de 6 letras."],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo( () => status === "checking", [status]);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
        <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Nombre completo"
            type="text"
            placeholder="Nombre completo"
            sx={{ width: "100%" }}
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            sx={{ width: "100%" }}
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            sx={{ width: "100%" }}
            name="password"
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            mt: 1,
          }}
        >
          <Box sx={{ width: "100%", mr: 1 }}>

            <Box sx={{ width: "100%", mr: 1, display: errorMessage ? "" : "none" }}>
              <Alert severity="error">{errorMessage}</Alert>
            </Box>

            <Button
              disabled={isCheckingAuthentication}
              type="submit"
              variant="contained"
              sx={{ width: "100%" }}
            >
              Crear cuenta
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
          <Link component={RouterLink} to="/auth/login" color="inherit">
            Ingresar
          </Link>
        </Box>
      </form>
    </AuthLayout>
  );
};

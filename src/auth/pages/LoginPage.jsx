import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router";
import { Alert, Button, Box, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

export const LoginPage = () => {

  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "harry@google.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password });
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
    console.log("onGoogleSignIn");
  };

  return (
    <AuthLayout title="Iniciar sesión">
        <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            sx={{ width: "100%" }}
            name="email"
            value={email}
            onChange={onInputChange}
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
          />
        </Box>

        <Box sx={{ mt: 2, display: errorMessage ? "" : "none" }}>
          <Alert severity="error">{errorMessage}</Alert>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            mt: 1,
          }}
        >
          <Box sx={{ width: "48%", mr: 1 }}>
            <Button
              disabled={ isAuthenticating }
              type="submit"
              variant="contained"
              sx={{ width: "100%" }}
            >
              Ingresar
            </Button>
          </Box>
          <Box sx={{ width: "48%", ml: 1 }}>
            <Button
              disabled={ isAuthenticating }
              variant="contained"
              sx={{ width: "100%" }}
              onClick={ onGoogleSignIn }
            >
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

import { Link as RouterLink } from "react-router";
import { Button, Box, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Nombre completo"
            type="text"
            placeholder="Nombre completo"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            sx={{ width: "100%" }}
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
            <Button variant="contained" sx={{ width: "100%" }}>
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

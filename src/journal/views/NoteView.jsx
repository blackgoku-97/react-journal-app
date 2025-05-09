import { Grid, Button, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid>
        <Typography fontSize={39} fontWeight="light">
          28 de agosto, 2025
        </Typography>
      </Grid>
      <Grid>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          placeholder="Ingrese un título"
          label="Título"
          sx={{ width: "100%", border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          multiline
          placeholder="Que sucedió en el día de hoy"
          sx={{ width: "100%" }}
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};

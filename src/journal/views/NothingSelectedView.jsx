import { Box, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
        <Typography color="white" variant="h5">Selecciona o crea una nota</Typography>
      </Box>
    </Box>
  );
};
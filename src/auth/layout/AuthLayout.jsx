import { Box, Typography } from '@mui/material'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          { title }
        </Typography>

        { children }
      </Box>
    </Box>
  );
};

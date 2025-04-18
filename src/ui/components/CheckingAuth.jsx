import { CircularProgress, Box } from "@mui/material";

export const CheckingAuth = () => {
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
      <Box display="flex" justifyContent="center">
        <CircularProgress color="warning" />
      </Box>
    </Box>
  );
};

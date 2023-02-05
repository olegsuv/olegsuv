import { Typography } from "@mui/material";

export default function Title({ children }) {
  return (
    <Typography variant="h4" color="primary" sx={{ flexGrow: 1 }}>
      {children}
    </Typography>
  );
}

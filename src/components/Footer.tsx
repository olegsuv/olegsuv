import { Container, Link, Typography } from "@mui/material";
import React from "react";

export function Footer() {
  return (
    <Container
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.primary.main}`,
        mt: 4,
        py: 4,
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://olegsuv.netlify.app/">
          olegsuv
        </Link>
        {" " + new Date().getFullYear() + "."}
      </Typography>
    </Container>
  );
}

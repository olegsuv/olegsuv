import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

export function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Oleg Suvorov
        </Typography>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Senior Frontend Developer
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.secondary"
            href="src#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="text.secondary"
            href="src#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="text.secondary"
            href="src#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

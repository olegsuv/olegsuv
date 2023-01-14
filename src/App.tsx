import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  AppBar,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import "./App.scss";
import { Follow } from "./Follow";
import { CV } from "./CV";

function App() {
  return (
    <React.Fragment>
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
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.secondary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.secondary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container disableGutters component="main" sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item>
            <CV />
          </Grid>
          <Grid item>
            <Follow />
          </Grid>
        </Grid>
      </Container>
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
    </React.Fragment>
  );
}

export default App;

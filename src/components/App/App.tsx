import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container, Grid } from "@mui/material";
import "./App.scss";
import { Follow } from "../Follow";
import { CV } from "../../CV";
import { Tasks } from "../../Tasks";

function App() {
  return (
    <Container disableGutters component="main" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item>
          <CV />
        </Grid>
        <Grid item>
          <Follow />
          <Tasks />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

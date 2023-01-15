import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container, Grid } from "@mui/material";
import "./App.scss";
import { Follow } from "../Follow";
import { CV } from "../CV/CV";
import { Tasks } from "../Tasks";
import { TechStack } from "../TechStack";

function App() {
  return (
    <Container component="main" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item lg={7}>
          <CV />
        </Grid>
        <Grid item lg={5}>
          <Follow />
          <Tasks />
          <TechStack />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

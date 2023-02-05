import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container, Grid } from "@mui/material";
import "./App.scss";
import { Follow } from "../Follow";
import { Tasks } from "../Tasks";
import { TechStack } from "../TechStack";
import CVTabs from "../CVTabs";
import { About } from "../About";

function App() {
  return (
    <Container component="main" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item lg={7}>
          <About />
          <CVTabs />
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

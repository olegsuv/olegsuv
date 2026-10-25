import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Alert, Container, Grid } from "@mui/material";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messengers from "../pages/messengers";
import Home from "../pages/home";

function App() {
  return (
    <Container component="main" sx={{ mt: 4 }}>
      {/* This build is the archive: the site as it was in May 2025, kept as history. */}
      <Alert severity="info" sx={{ mb: 3 }}>
        <strong>Archive.</strong> This is my site as it was in May 2025: the CV and
        the test tasks below were written by hand, before AI coding tools. The current
        version is at <a href="https://olegsuv.dev/">olegsuv.dev</a>.
      </Alert>
      <Grid container spacing={4}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="messengers" element={<Messengers />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </Container>
  );
}

export default App;

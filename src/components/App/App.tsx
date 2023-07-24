import React from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Container, Grid } from "@mui/material";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messengers from "../pages/messengers";
import Home from "../pages/home";

function App() {
  return (
    <Container component="main" sx={{ mt: 4 }}>
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

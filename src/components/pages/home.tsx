import { Grid } from "@mui/material";
import { About } from "../About";
import { Follow } from "../Follow";
import { Tasks } from "../Tasks";
import { TechStack } from "../TechStack";
import React from "react";
import CVOnly from "../CVOnly";

function Home() {
  return (
    <>
      <Grid item lg={7}>
        <About />
        <CVOnly />
      </Grid>
      <Grid item lg={5}>
        <Follow />
        <Tasks />
        <TechStack />
      </Grid>
    </>
  );
}

export default Home;

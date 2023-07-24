import { Grid } from "@mui/material";
import { About } from "../About";
import CVTabs from "../CVTabs";
import { Follow } from "../Follow";
import { Tasks } from "../Tasks";
import { TechStack } from "../TechStack";
import React from "react";

function Home() {
  return (
    <>
      <Grid item lg={7}>
        <About />
        <CVTabs />
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

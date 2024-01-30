import { Grid } from "@mui/material";
import { About } from "../About";
import { Follow } from "../Follow";
import { Tasks } from "../Tasks";
import { TechStack } from "../TechStack";
import React from "react";
import { CV } from "../CV/CV";

function Home() {
  return (
    <>
      <Grid item lg={7}>
        <About />
        <CV fileLength={2} />
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

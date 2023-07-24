import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { Follow } from "../Follow";
import { Tasks } from "../Tasks";
import { TechStack } from "../TechStack";
import React from "react";
import { Generator } from "../Generator";

function Messengers() {
  return (
    <>
      <Grid item lg={7}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" href="/">
            Home
          </Link>
          <Typography>Messengers</Typography>
        </Breadcrumbs>
        <Generator />
      </Grid>
      <Grid item lg={5}>
        <Follow />
        <Tasks />
        <TechStack />
      </Grid>
    </>
  );
}

export default Messengers;

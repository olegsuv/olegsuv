import Box from "@mui/material/Box";
import * as React from "react";
import photo from "../images/photo.png";
import { Grid, Typography } from "@mui/material";
import Title from "./common/Title";

export function About() {
  return (
    <Grid container spacing={4} sx={{ mb: 2, width: 595 }}>
      <Grid item sm={4}>
        <Box
          component="img"
          sx={{
            margin: "auto",
            maxHeight: 160,
            maxWidth: 160,
            borderRadius: 1,
          }}
          alt="Oleg Suvorov Photo"
          src={photo}
        />
      </Grid>
      <Grid item sm={8}>
        <Title>Thank you for visiting my home page!</Title>
        <Typography>
          Here you can download the latest version of CV, <a href="https://www.calendly.com/olegsuv/">book a call with me</a>, <a
          href="https://github.com/olegsuv/">check test projects</a>. Don't forger to try <a href="/messengers">buttons for messengers</a> ;-)
        </Typography>
      </Grid>
    </Grid>
  );
}

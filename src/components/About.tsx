import Box from "@mui/material/Box";
import * as React from "react";
import photo from "../images/photo.png";
import { Grid, Typography } from "@mui/material";
import Title from "./common/Title";

export function About() {
  return (
    <Grid container spacing={4} sx={{ mb: 4 }}>
      <Grid item sm={4}>
        <Box
          component="img"
          sx={{
            margin: "auto",
            maxHeight: 160,
            maxWidth: 160,
          }}
          alt="Oleg Suvorov Photo"
          src={photo}
        />
      </Grid>
      <Grid item sm={8}>
        <Title>Thank you for visiting my home page!</Title>
        <Typography>
          Here you can download the latest versions of CV, get contact links,
          and check projects, including live demo links.
        </Typography>
      </Grid>
    </Grid>
  );
}

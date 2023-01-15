import React from "react";
import { Chip, Stack, Typography } from "@mui/material";

function CustomChip({ label, href }) {
  return (
    <Chip label={label} href={href} component="a" clickable target="_blank" />
  );
}

export function TechStack() {
  return (
    <>
      <Typography variant="h4" color="primary" noWrap sx={{ flexGrow: 1 }}>
        Tech stack of this website:
      </Typography>
      <Stack direction="row" flexWrap="wrap" spacing={0} sx={{ gap: 2, mt: 2 }}>
        <CustomChip href="https://reactjs.org/" label="React" />
        <CustomChip
          href="https://www.npmjs.com/package/react-scripts"
          label="React Scripts"
        />
        <CustomChip
          href="https://reactjs.org/docs/create-a-new-react-app.html"
          label="React Create App"
        />
        <CustomChip href="https://react-pdf.org/" label="React PDF" />
        <CustomChip href="https://www.typescriptlang.org/" label="Typescript" />
        <CustomChip href="https://mui.com/material-ui/" label="Material UI" />
        <CustomChip href="https://www.netlify.com/" label="Netlify" />
        <CustomChip href="https://prettier.io/" label="Prettier" />
        <CustomChip href="https://sass-lang.com/" label="SCSS" />
      </Stack>
    </>
  );
}

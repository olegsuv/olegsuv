import React from "react";
import { Chip, Stack } from "@mui/material";
import Title from "./common/Title";

function CustomChip({ label, href }) {
  return (
    <Chip label={label} href={href} component="a" clickable target="_blank" />
  );
}

export function TechStack() {
  return (
    <Stack sx={{mb: 2}}>
      <Title>Tech stack of this website:</Title>
      <Stack direction="row" flexWrap="wrap" spacing={0} sx={{ gap: 2, mt: 2 }}>
        <CustomChip href="https://react.dev/" label="React" />
        <CustomChip
          href="https://www.npmjs.com/package/react-scripts"
          label="React Scripts"
        />
        <CustomChip
          href="https://create-react-app.dev/"
          label="React Create App"
        />
        <CustomChip href="https://www.npmjs.com/package/react-pdf" label="React PDF" />
        <CustomChip href="https://www.typescriptlang.org/" label="Typescript" />
        <CustomChip href="https://mui.com/material-ui/" label="Material UI" />
        <CustomChip href="https://www.netlify.com/" label="Netlify" />
        <CustomChip href="https://prettier.io/" label="Prettier" />
        <CustomChip href="https://sass-lang.com/" label="SCSS" />
      </Stack>
    </Stack>
  );
}

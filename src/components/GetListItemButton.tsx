import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from "@mui/material";

interface GetListItemButtonProps {
  URL: string;
  Icon: React.ComponentType<SvgIconProps>;
  protocol?: string;
}

export function GetListItemButton({
  URL,
  Icon,
  protocol,
}: GetListItemButtonProps) {
  const openLink = protocol ? `${protocol}:${URL}` : `https://www.${URL}/`;

  return (
    <ListItemButton onClick={() => window.open(openLink)}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={URL} />
    </ListItemButton>
  );
}

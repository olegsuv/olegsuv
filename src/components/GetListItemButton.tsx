import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from "@mui/material";

interface GetListItemButtonProps {
  primary: string;
  secondary?: string;
  Icon: React.ComponentType<SvgIconProps>;
  protocol?: string;
}

export function GetListItemButton({
  primary,
  secondary,
  Icon,
  protocol,
}: GetListItemButtonProps) {
  const openLink = protocol
    ? `${protocol}${primary}`
    : `https://www.${primary}/`;

  return (
    <ListItemButton onClick={() => window.open(openLink)}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={primary} secondary={secondary || null} />
    </ListItemButton>
  );
}

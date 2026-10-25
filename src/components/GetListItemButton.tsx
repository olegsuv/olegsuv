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
  href?: string;
}

export function GetListItemButton({
  primary,
  secondary,
  Icon,
  protocol,
  href,
}: GetListItemButtonProps) {
  const openLink = href ?? (protocol ? `${protocol}${primary}` : `https://${primary}`);

  return (
    <ListItemButton onClick={() => window.open(openLink)}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={primary} secondary={secondary || null} />
    </ListItemButton>
  );
}

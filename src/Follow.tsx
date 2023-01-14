import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppsIcon from "@mui/icons-material/Apps";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CoPresentIcon from "@mui/icons-material/CoPresent";

interface GetListItemButtonProps {
  URL: string;
  Icon: React.ComponentType<SvgIconProps>;
  protocol?: string;
}

function GetListItemButton({ URL, Icon, protocol }: GetListItemButtonProps) {
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

export function Follow() {
  return (
    <>
      <Typography variant="h4" color="primary" noWrap sx={{ flexGrow: 1 }}>
        Add • connect • follow me:
      </Typography>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        <GetListItemButton
          URL="olegsuv@gmail.com"
          Icon={EmailIcon}
          protocol="mailto"
        />
        <GetListItemButton URL="linkedin.com/in/olegsuv" Icon={LinkedInIcon} />
        <GetListItemButton URL="github.com/olegsuv" Icon={GitHubIcon} />
        <GetListItemButton URL="polywork.com/oleg_suvorov" Icon={AppsIcon} />
        <GetListItemButton URL="angel.co/u/suvorov-oleg" Icon={CoPresentIcon} />
        <GetListItemButton URL="calendly.com/olegsuv" Icon={AddToQueueIcon} />
        <GetListItemButton URL="facebook.com/olegsuv.ua" Icon={FacebookIcon} />
        <GetListItemButton
          URL="instagram.com/oleg.suvorov"
          Icon={InstagramIcon}
        />
      </List>
    </>
  );
}

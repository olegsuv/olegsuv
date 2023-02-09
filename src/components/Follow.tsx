import React from "react";
import { List } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppsIcon from "@mui/icons-material/Apps";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import TelegramIcon from "@mui/icons-material/Telegram";
import { GetListItemButton } from "./GetListItemButton";
import Title from "./common/Title";

export function Follow() {
  return (
    <>
      <Title>Add • connect • follow me:</Title>
      <List component="nav">
        <GetListItemButton
          primary="olegsuv@gmail.com"
          secondary="Primary way to communicate"
          Icon={EmailIcon}
          protocol="mailto"
        />
        <GetListItemButton
          primary="linkedin.com/in/olegsuv"
          secondary="Connect with me"
          Icon={LinkedInIcon}
        />
        <GetListItemButton
          primary="github.com/olegsuv"
          secondary="Code samples"
          Icon={GitHubIcon}
        />
        <GetListItemButton
          primary="calendly.com/olegsuv"
          secondary="Book a call with me"
          Icon={AddToQueueIcon}
        />
        <GetListItemButton
          primary="polywork.com/oleg_suvorov"
          Icon={AppsIcon}
        />
        <GetListItemButton
          primary="angel.co/u/suvorov-oleg"
          Icon={CoPresentIcon}
        />
        <GetListItemButton primary="t.me/olegsuv_ua" Icon={TelegramIcon} />
        <GetListItemButton
          primary="facebook.com/olegsuv.ua"
          Icon={FacebookIcon}
        />
        <GetListItemButton
          primary="instagram.com/oleg.suvorov"
          Icon={InstagramIcon}
        />
      </List>
    </>
  );
}

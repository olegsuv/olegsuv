import React from "react";
import { List } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import FacebookIcon from "@mui/icons-material/Facebook";
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
          protocol="mailto:"
        />
        <GetListItemButton
          primary="linkedin.com/in/olegsuv"
          href="https://www.linkedin.com/in/olegsuv"
          secondary="Connect with me"
          Icon={LinkedInIcon}
        />
        <GetListItemButton
          primary="github.com/olegsuv"
          href="https://github.com/olegsuv"
          secondary="Code samples"
          Icon={GitHubIcon}
        />
        <GetListItemButton
          primary="calendly.com/olegsuv"
          href="https://calendly.com/olegsuv/"
          secondary="Book a call with me"
          Icon={AddToQueueIcon}
        />
        <GetListItemButton
          primary="wellfound.com/u/suvorov-oleg"
          href="https://wellfound.com/u/suvorov-oleg/"
          Icon={CoPresentIcon}
        />
        <GetListItemButton primary="t.me/olegsuv_ua" href="https://t.me/olegsuv_ua" Icon={TelegramIcon} />
        <GetListItemButton
          primary="facebook.com/olegsuv.ua"
          href="https://www.facebook.com/olegsuv.ua/"
          Icon={FacebookIcon}
        />
      </List>
    </>
  );
}

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
          URL="olegsuv@gmail.com"
          Icon={EmailIcon}
          protocol="mailto"
        />
        <GetListItemButton URL="linkedin.com/in/olegsuv" Icon={LinkedInIcon} />
        <GetListItemButton URL="github.com/olegsuv" Icon={GitHubIcon} />
        <GetListItemButton URL="polywork.com/oleg_suvorov" Icon={AppsIcon} />
        <GetListItemButton URL="angel.co/u/suvorov-oleg" Icon={CoPresentIcon} />
        <GetListItemButton URL="calendly.com/olegsuv" Icon={AddToQueueIcon} />
        <GetListItemButton URL="t.me/olegsuv_ua" Icon={TelegramIcon} />
        <GetListItemButton URL="facebook.com/olegsuv.ua" Icon={FacebookIcon} />
        <GetListItemButton
          URL="instagram.com/oleg.suvorov"
          Icon={InstagramIcon}
        />
      </List>
    </>
  );
}

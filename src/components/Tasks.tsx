import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CollectionsIcon from "@mui/icons-material/Collections";
import { GetListItemButton } from "./GetListItemButton";
import Title from "./common/Title";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export function Tasks() {
  return (
    <>
      <Title>Demo of solved test tasks:</Title>
      <List component="nav">
        <ListItemButton onClick={() => (window.location.href = "/messengers")}>
          <ListItemIcon>
            <WhatsAppIcon />
            <TelegramIcon />
          </ListItemIcon>
          <ListItemText
            primary="Messengers link generator"
            secondary="WhatsApp / Telegram / Viber buttons"
          />
        </ListItemButton>
        <GetListItemButton
          primary="github.com/olegsuv/react-checkers"
          secondary="Test task for Tesla"
          Icon={GridViewIcon}
        />
        <GetListItemButton
          primary="github.com/olegsuv/react-photo-slider"
          secondary="Test task for Talarian"
          Icon={CollectionsIcon}
        />
        <GetListItemButton
          primary="github.com/olegsuv/react-auto-complete"
          secondary="Test task for Deel"
          Icon={InputIcon}
        />
        <GetListItemButton
          primary="github.com/olegsuv/react-todo-list"
          secondary="Test task for Fasta"
          Icon={FormatListBulletedIcon}
        />
        <GetListItemButton
          primary="github.com/olegsuv/jqTree-generator"
          secondary="Test task for InfrontX"
          Icon={AccountTreeIcon}
        />
      </List>
    </>
  );
}

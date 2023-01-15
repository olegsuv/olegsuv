import React from "react";
import { List, Typography } from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { GetListItemButton } from "./GetListItemButton";

export function Tasks() {
  return (
    <>
      <Typography variant="h4" color="primary" sx={{ flexGrow: 1 }}>
        Demo of solved test tasks:
      </Typography>
      <List component="nav">
        <GetListItemButton
          URL="github.com/olegsuv/react-auto-complete"
          Icon={InputIcon}
        />
        <GetListItemButton
          URL="github.com/olegsuv/react-todo-list"
          Icon={FormatListBulletedIcon}
        />
        <GetListItemButton
          URL="github.com/olegsuv/react-checkers"
          Icon={GridViewIcon}
        />
        <GetListItemButton
          URL="github.com/olegsuv/jqTree-generator"
          Icon={AccountTreeIcon}
        />
      </List>
    </>
  );
}

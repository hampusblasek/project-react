import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
// Används till ingredienser och instruktioner i receptsidan
export function CheckList({ type }) {
  return (
    <>
      <Box>
        <ListItem>
          <Checkbox />
          <ListItemText primary={type} />
        </ListItem>
        <Divider variant="inset" component="li" />
      </Box>
    </>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export function BasicRating() {
  /* const [value, setValue] = (React.useState < number) | (null > 2); */

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
     
      <Rating
        name="simple-uncontrolled"
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
        defaultValue={2}
        size="large"
      />
    </Box>
  );
}

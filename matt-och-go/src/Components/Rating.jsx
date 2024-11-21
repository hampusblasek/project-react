import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export function BasicRating({food}) {
  const [value, setValue] = useState([]);
  console.log(food);
  

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
     
     <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          
        }}
        size="large"
      />
    </Box>
  );
}

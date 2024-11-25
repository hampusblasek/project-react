import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../CSS/error.css";


export function Loading() {
  return (
    <div className="error-container">
        <div className="loading-box">
            <Box sx={{ display: "flex" }}>
              <CircularProgress size="70px" />
            </Box>
        </div>
    </div>
  );
}

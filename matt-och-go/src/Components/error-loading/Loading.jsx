import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import "../../CSS/error.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Loading() {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  function longLoading() {
    setTimeout(() => {
      setIsLoading(true)
    }, 4000);
  }
return (
      <>
        <div className="error-container">
          <div className="loading-box">
            <Box sx={{ display: "flex" }}>
              <CircularProgress size="70px" />
            </Box>
          </div>
          <div>{longLoading()}</div>
          <div className={isLoading ? "show" : "hide"}>
              <h2 className="message-title">Hoppsan, här tar det lång tid!</h2>
              <p className="message-text">Receptet du söker efter hittas inte. Tryck på knappen nedan för att gå tillbaka till startsidan.</p>
            <div className="message-box">
            <Stack direction="row" justifyContent={"center"} spacing={2}>
              <Button  onClick={() => navigate("/")} variant="contained" color="black" sx={{ bgcolor: green[400] }}>
                Tillbaka till startsidan
              </Button>
            </Stack>
            </div>
          </div>
        </div>
      </>
    );
  
}

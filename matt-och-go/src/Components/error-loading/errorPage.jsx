import { useNavigate } from "react-router-dom";
import "../../CSS/error.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

// felmeddelande som visas upp när routingen inte hittar någon path
export function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div className="error-container">
        <div className="error-box">
          <div className="error-text">
            <h2 className="error-title">Oops! Sidan du söker hittades inte</h2>
            <p className="error-p">
              Tryck på knappen nedan för att komma tillbaka till startsidan
            </p>
            <Stack direction="row" justifyContent={"center"} spacing={2}>
              <Button  onClick={() => navigate("/")} variant="contained" color="black" sx={{ bgcolor: green[400] }}>
                Tillbaka till startsidan
              </Button>
            </Stack>
          </div>
          <img className="error-img" src="/chef-big.svg" alt="" />
        </div>
      </div>
    </>
  );
}

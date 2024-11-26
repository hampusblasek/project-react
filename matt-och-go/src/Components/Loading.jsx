import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../CSS/error.css";
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
              <button className="message-btn" onClick={() => navigate("/")}>Tillbaka till startsidan</button>
            </div>
          </div>
        </div>
      </>
    );
  
}

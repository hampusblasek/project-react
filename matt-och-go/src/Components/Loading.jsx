import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../CSS/error.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()
  function longLoading() {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000);
  }

  if (!isLoading) {
    return (
      <>
        <div className="error-container">
          <div className="loading-box">
            <Box sx={{ display: "flex" }}>
              <CircularProgress size="70px" />
            </Box>
          </div>
          <div>
              <h2 className="message-title">Hoppsan, här tar det lång tid!</h2>
              <p className="message-text">Receptet du söker efter hittas inte. Tryck på knappen nedan för att gå tillbaka.</p>
            <div className="message-box">
              <button className="message-btn" onClick={() => navigate(-1)}>Tillbaka</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="error-container">
          <div className="loading-box">
            <Box sx={{ display: "flex" }}>
              <CircularProgress size="70px" />
            </Box>
            <p>Laddar...</p>
          </div>
          <div>{longLoading()}</div>
        </div>
      </>
    );
  }
}

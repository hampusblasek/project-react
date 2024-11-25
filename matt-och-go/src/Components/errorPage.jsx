import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/error.css";

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
            <button onClick={() => navigate("/")} className="error-btn">
              Tillbaka till startsidan
            </button>
          </div>
          <img className="error-img" src="/chef-big.svg" alt="" />
        </div>
      </div>
    </>
  );
}

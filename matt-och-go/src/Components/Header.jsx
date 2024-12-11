import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { saveRecState } from "../App";
import { Navigate } from "react-router-dom";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink, red } from "@mui/material/colors";
import "../CSS/header.css";
//Header
export function Header() {
  const [saveRec, setSaveRec] = useRecoilState(saveRecState);
  const navigateTo = useNavigate();

  const savedResNumber = () => { // funktion som skriver ut hur många sparade recept det finns.
    if (saveRec.length > 0) {
      return saveRec.length;
    } else {
      return null;
    }
  };
  const savedResHeart = () => { // funktion som visar ett hjärta i sparade recept-linken om det finns några sparade recept
    if (saveRec.length > 0) {
      return <FavoriteIcon sx={{ color: red[600] }} />;
    } else {
      return null;
    }
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -8,
      top: 12,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <>
      <header>
        <div onClick={() => navigateTo("/")} className="logo-box">
          <h1 className="logo">Mätt och Go!</h1>
          <img className="logo-img" src="/logo2.png" alt="" />
        </div>
        <nav>
          <NavLink className="link" to="/">
            Hem
          </NavLink>
          <NavLink className="link" to="category">
            Kategorier
          </NavLink>
          <NavLink className="link" to="saved-recipes">
            Sparade recept
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={savedResNumber()} color="secondary">
                {savedResHeart()}
              </StyledBadge>
            </IconButton>
          </NavLink>
          <NavLink className="link" to="about-us">
            Om Oss
          </NavLink>
        </nav>
      </header>
    </>
  );
}

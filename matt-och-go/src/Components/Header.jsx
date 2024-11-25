import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { saveRecState } from "../App";
import { Navigate } from "react-router-dom";
import "../CSS/header.css";

export function Header() {
  const [saveRec, setSaveRec] = useRecoilState(saveRecState);
  const navigateTo = useNavigate();

  const savedResNumber = () => {
    if (saveRec.length > 0) {
      return saveRec.length;
    } else {
      return null;
    }
  };
  const savedResHeart = () => {
    if (saveRec.length > 0) {
      return "/heart.svg";
    } else {
      return null;
    }
  };
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
            Världens kök
          </NavLink>
          <NavLink className="link" to="saved-recipes">
            Sparade recept <img src={savedResHeart()} alt="" />{" "}
            <span>{savedResNumber()}</span>
          </NavLink>
          <NavLink className="link" to="about-us">
            Om Oss
          </NavLink>
        </nav>
      </header>
    </>
  );
}

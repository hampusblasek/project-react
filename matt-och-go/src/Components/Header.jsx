import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { saveRecState } from "../App";
import "../CSS/header.css";

export function Header() {
  const [saveRec, setSaveRec] = useRecoilState(saveRecState);
  const savedResNumber = () => {
    if(saveRec.length > 0){
      return saveRec.length
    } else{
      return null
    }
  }
  const savedResHeart = () => {
    if(saveRec.length > 0){
      return "/heart.svg"
    } else{
      return null
    }
  }
  return (
    <>
      <header>
        
        <h1 className="logo">Mätt och Go!</h1>
            <nav>
                <Link className="link" to="/">Hem</Link>
                <Link className="link" to="category">Världens kök</Link>
                <Link className="link" to="saved-recipes">Sparade recept <img src={savedResHeart()} alt="" /> <span>{savedResNumber()}</span></Link>
                <Link className="link" to="about-us">Om Oss</Link>
            </nav>
        
      </header>
    </>
  );
}

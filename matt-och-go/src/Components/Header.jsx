import { Link } from "react-router-dom";
import "../CSS/header.css";

export function Header() {
  return (
    <>
      <header>
        
        <h1 className="logo">Mätt och Go!</h1>
            <nav>
                <Link className="link" to="/">Hem</Link>
                <Link className="link" to="category">Världens kök</Link>
                <Link className="link" to="saved-recipes">Sparade recept</Link>
                <Link className="link" to="about-us">Om Oss</Link>
            </nav>
        
      </header>
    </>
  );
}

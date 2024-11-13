import { Link } from "react-router-dom";
import "../CSS/header.css";

export function Header() {
  return (
    <>
      <header>
        <h1 className="logo">Mätt och Go!</h1>
        <div className="nav-box">
            <nav>
                <Link className="link" to="/">Hem</Link>
                <Link className="link" to="category">Kategorier</Link>
                <Link className="link" to="saved-recipes">Sparade recept</Link>
                <Link className="link" to="about-us">Om Oss</Link>
            </nav>
        </div>
      </header>
    </>
  );
}

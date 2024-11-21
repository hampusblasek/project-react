import { useState } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { useEffect } from "react";
import { getRecipes } from "./API/api";
import { Outlet} from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { NavigatePage } from "./Router";
import "./App.css";

export const recipeState = atom({
  key: "recipe",
  default: [],
});
export const saveRecState = atom({
  key: "save",
  default: [],
});
export const ratingsState = atom({
  key: "rating",
  default: []
})

function App() {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [saveRec, setSaveRec] = useRecoilState(saveRecState);
  const [ratingState, SetRatingState] = useRecoilState(ratingsState);
  const [catData, setCatData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);

  const levelImg = (food) => {
    let img = "";
    if (food === "Easy") {
      img = "/easy.svg";
      return img;
    } else if (food == "Medium") {
      img = "/medium.svg";
      return img;
    } else {
      img = "/hard.svg";
      return img;
    }
  };

  return (
    <>
      <NavigatePage
        levelImg={levelImg}
        setCatData={setCatData}
        catData={catData}
        setTitle={setTitle}
        title={title}
      />
    </>
  );
}

export function Layout() {
  return (
    <>
      <div className="body-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;

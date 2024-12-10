import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { getRecipes } from "./api/api";
import { Outlet } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { NavigatePage } from "./Router";
import "./App.css";

export const recipeState = atom({
  //Globalstate som innehåller alla recept
  key: "recipe",
  default: [],
});
export const saveRecState = atom({
  // Globalstate som innehåller alla sparade recept
  key: "save",
  default: [],
});
export const ratingsState = atom({
  // Globalstate som innehåller alla betyg
  key: "rating",
  default: [],
});
export const globalCuisineState = atom({
  // GlobalState som änvänds i category
  key: "cuisine",
  default: false,
});
export const globalTypeState = atom({
  // GlobalState som änvänds i category
  key: "type",
  default: false,
});
export const globalAllState = atom({
  // GlobalState som änvänds i category
  key: "all",
  default: false,
});
export const globalCatData = atom({
  // GlobalState som visar recepten i category
  key: "catData",
  default: [],
});
export const randomHotState = atom({
  key: "hot",
  default: "",
})
export const randomColdState = atom({
  key: "cold",
  default: "",
})

function App() {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");

  useEffect(() => {
    getRecipes().then(setRecipes); // Lägger in recept i globalstaten från api:et
  }, []);

  console.log(recipes);

  return (
    <>
      <NavigatePage
        setTitle={setTitle}
        title={title}
        setTitle2={setTitle2}
        title2={title2}
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

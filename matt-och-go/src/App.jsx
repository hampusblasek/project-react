import { useState } from "react";
import { HomePage } from "./Pages/home";
import { RecipePage } from "./Pages/Recipe";
import { Categories } from "./Pages/Category";
import { SavedRecipes } from "./Pages/save";
import { AboutUs } from "./Pages/about-us";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { useEffect } from "react";
import { getRecipes } from "./API/api";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {atom, useRecoilState} from "recoil";
import "./App.css";

export const recipeState = atom({
  key: "recipe",
  default: [],
})

function App() {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [recData, setRecData] = useState({});
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <HomePage
                  recipes={recipes}
                  setRecipes={setRecipes}
                  setRecData={setRecData}
                  recData={recData}
                  levelImg={levelImg}
                />
              }
            ></Route>
            <Route
              path="/recipe"
              element={
                <RecipePage
                  recipes={recipes}
                  recData={recData}
                  levelImg={levelImg}
                />
              }
            ></Route>
            <Route
              path="/category"
              element={
                <Categories
                  recipes={recipes}
                  setCatData={setCatData}
                  catData={catData}
                  setTitle={setTitle}
                  title={title}
                  setRecData={setRecData}
                  levelImg={levelImg}
                />
              }
            ></Route>
            <Route
              path="/category/recipe"
              element={
                <RecipePage
                  recipes={recipes}
                  recData={recData}
                  levelImg={levelImg}
                />
              }
            ></Route>
            <Route path="saved-recipes" element={<SavedRecipes />}></Route>
            <Route path="about-us" element={<AboutUs />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
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

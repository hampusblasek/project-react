import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./App";
import { Categories } from "./Pages/Category";
import { HomePage } from "./Pages/Home";
import { RecipePage } from "./Pages/Recipe";
import { AboutUs } from "./Pages/about-us";
import { SavedRecipes } from "./Pages/save";
import { Error } from "./Components/error-loading/errorPage";

export function NavigatePage({
  levelImg,
  setCatData,
  catData,
  title,
  setTitle,
}) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/recipe/:id" element={<RecipePage />}></Route>
            <Route
              path="/category"
              element={
                <Categories
                  setCatData={setCatData}
                  catData={catData}
                  setTitle={setTitle}
                  title={title}
                />
              }
            ></Route>
            <Route path="/category/recipe/:id" element={<RecipePage />}></Route>
            <Route
              path="/saved-recipes/category/recipe"
              element={<RecipePage />}
            ></Route>
            <Route
              path="saved-recipes/recipe/:id"
              element={<RecipePage />}
            ></Route>
            <Route
              path="saved-recipes/category"
              element={
                <Categories
                  setCatData={setCatData}
                  catData={catData}
                  setTitle={setTitle}
                  title={title}
                />
              }
            ></Route>
            <Route
              path="saved-recipes"
              element={<SavedRecipes />}
            ></Route>
            <Route path="about-us" element={<AboutUs />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

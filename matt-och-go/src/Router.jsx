import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./App";
import { Categories } from "./pages/Category";
import { HomePage } from "./pages/Home";
import { RecipePage } from "./pages/Recipe";
import { AboutUs } from "./pages/about-us";
import { SavedRecipes } from "./pages/save";
import { Error } from "./components/error-loading/ErrorPage";
//Routing
export function NavigatePage({ title, setTitle, setTitle2, title2 }) {
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
                  setTitle={setTitle}
                  title={title}
                  setTitle2={setTitle2}
                  title2={title2}
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
                  setTitle={setTitle}
                  title={title}
                  setTitle2={setTitle2}
                  title2={title2}
                />
              }
            ></Route>
            <Route path="saved-recipes" element={<SavedRecipes />}></Route>
            <Route path="about-us" element={<AboutUs />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

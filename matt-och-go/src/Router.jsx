import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./App";
import { Categories } from "./Pages/Category";
import { HomePage } from "./Pages/home";
import { RecipePage } from "./Pages/Recipe";
import { AboutUs } from "./Pages/about-us";
import { SavedRecipes } from "./Pages/save";

export function NavigatePage({levelImg, setCatData, catData, title, setTitle}) {
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage levelImg={levelImg} />}></Route>
        <Route
          path="/recipe/:id"
          element={<RecipePage levelImg={levelImg} />}
        ></Route>
        <Route
          path="/category"
          element={
            <Categories
              setCatData={setCatData}
              catData={catData}
              setTitle={setTitle}
              title={title}
              levelImg={levelImg}
            />
          }
        ></Route>
        <Route
          path="/category/recipe/:id"
          element={<RecipePage levelImg={levelImg} />}
        ></Route>
        <Route
          path="/saved-recipes/category/recipe"
          element={<RecipePage levelImg={levelImg} />}
        ></Route>
        <Route
          path="saved-recipes/recipe/:id"
          element={<RecipePage levelImg={levelImg} />}
        ></Route>
         <Route
          path="saved-recipes/category"
          element={<Categories 
          setCatData={setCatData}
          catData={catData}
          setTitle={setTitle}
          title={title}
          levelImg={levelImg}/>}
        ></Route>
        <Route
          path="saved-recipes"
          element={<SavedRecipes levelImg={levelImg} />}
        ></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
}
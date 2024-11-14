import { useState } from "react";
import { HomePage } from "./Pages/home";
import { RecipePage } from "./Pages/recipe";
import { Categories } from "./Pages/category";
import { SavedRecipes } from "./Pages/save";
import { AboutUs } from "./Pages/about-us";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { useEffect } from "react";
import { getRecipes } from "./API/api";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recData, setRecData] = useState({})

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);

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
                 
                />
              }
            ></Route>
            <Route path="recipe" element={<RecipePage recipes={recipes} recData={recData} />}></Route>
            <Route path="category" element={<Categories />}></Route>
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

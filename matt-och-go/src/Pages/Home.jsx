import { useRecoilState } from "recoil";
import { Under40 } from "../Components/Under40";
import { EasyCook } from "../Components/EasyCook";
import { AfterFood } from "../Components/After";
import { Drinks } from "../Components/Drinks";
import { recipeState } from "../App";
import "../CSS/home.css";

export function HomePage({setRecData, levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  /* useEffect(() => {
    setFast(
      recipes.filter(
        (value) => value.cookTimeMinutes + value.prepTimeMinutes < 40
      )
    );
  }, []); */

  /* useEffect(() => {
    setEasy(recipes.filter((value) => value.difficulty === "Easy"));
  }, []); */

  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h2 className="hero-text">Vad är du sugen på?</h2>
        </div>
        <h2 className="h2-title">Färdigt på under 40 min!</h2>
        <Under40
          setRecData={setRecData}
          levelImg={levelImg}
        />

        <h2 className="h2-title">Något Lättlagat?</h2>
        <EasyCook
          setRecData={setRecData}
          levelImg={levelImg}
        />

        <h2 className="h2-title">Något sött?</h2>
        <AfterFood
          setRecData={setRecData}
          levelImg={levelImg}
        />

        <h2 className="h2-title">Något att dricka?</h2>
        <Drinks setRecData={setRecData} levelImg={levelImg} />
      </div>
    </>
  );
}

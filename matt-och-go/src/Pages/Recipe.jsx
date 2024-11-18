import { useRecoilState } from "recoil";
import { recipeState, recDataState } from "../App";
import "../CSS/recipe.css";

export function RecipePage({ levelImg }) {
  const [recipes, setRecipes] = useRecoilState(recipeState);
  const [recData, setRecData] = useRecoilState(recDataState);
  const food = recipes.find((recipe) => recipe.id === recData.recipeId);
  console.log(food);

  return (
    <>
      <div className="recipe-container">
        <div className="recipe-box">
          <div className="rec-info">
            <h1 className="rec-title">{food.name}</h1>
            <div className="info">
              <img className="food-icon" src="/time-green.svg" alt="" />
              <span>{food.cookTimeMinutes + food.prepTimeMinutes} minuter</span>
              {food.mealType.map((type) => (
                <span className="rec-type">{type}</span>
              ))}
              <div className="rating-box">
                <img className="star" src="/star.svg" alt="" />
                <span className="rec-rating">{food.rating}</span>
                <span className="rec-rating">({food.reviewCount})</span>
              </div>
            </div>
            <div className="info-2">
              <img
                className="food-icon"
                src={levelImg(food.difficulty)}
                alt=""
              />
              <p className="info-2-p">
                Svårighetsgrad: <span>{food.difficulty}</span>
              </p>
              <img className="food-icon" src="/calories.svg" alt="" />
              <p className="info-2-p">
                <span>{food.caloriesPerServing}</span> kalorier per portion
              </p>
            </div>
            <h2 className="ingredients-title">Ingredienser</h2>
            <div className="ingredients-container">
              <div className="ingredients-box">
                {food.ingredients.map((type) => (
                  <div className="ingredients-content">
                    <input className="check" type="checkbox" />
                    <span className="rec-ingredients">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bottom-section">
              <div className="tag-wrapper">
                {food.tags.map((tag) => (
                  <span className="rec-type-2">{tag}</span>
                ))}
              </div>
              <img className="food-icon" src="/share.svg" alt="En dela-icon" />
              <img
                className="food-icon-2"
                src="/heart.svg"
                alt="Ett hjärta"
                title="Spara recept"
              />
            </div>
          </div>
          <div className="rec-img">
            <img className="food-img" src={food.image} alt="" />
            <div className="instruction-title">
              <img className="food-icon" src="/chef-hat.svg" alt="" />
              <h2 className="instruction-h2">Gör Såhär</h2>
            </div>
            <div className="instruction-box">
              <ul>
                {food.instructions.map((how) => (
                  <li className="instruction-li">{how}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

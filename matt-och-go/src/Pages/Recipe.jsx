import "../CSS/recipe.css";

export function RecipePage({ recipes, recData }) {
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
              <span>{food.mealType +""}</span>
              <img src="" alt="" />
              <span></span>
            </div>
          </div>
          <div className="rec-img">
            <img className="food-img" src={food.image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

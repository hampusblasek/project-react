import "../CSS/recipe.css";

export function RecipePage({ recipes, recData }) {
  const food = recipes.find((recipe) => recipe.id === recData.recipeId);
  console.log(food);
  
  

  return (
    <>
      <div className="recipe-container">
        <p>{food.name}</p>
      </div>
    </>
  );
}

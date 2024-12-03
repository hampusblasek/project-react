export async function getRecipes() {
  const response = await fetch("http://localhost:5173/recipes.json");
  const content = await response.json();

  return content.recipes;
}

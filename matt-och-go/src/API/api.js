export async function getRecipes() {
  const response = await fetch("recipes.json");
  const content = await response.json();

  return content.recipes;
}

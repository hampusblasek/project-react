export async function getRecipes() {
  const response = await fetch("https://dummyjson.com/recipes");
  const content = await response.json();

  return content.recipes;
}

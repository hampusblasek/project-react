import "../CSS/category.css";
import { Cards } from "../Components/cards";

export function Categories({
  recipes,
  setCatData,
  catData,
  setTitle,
  title,
  setRecData,
  levelImg
}) {
  const catList = [];
  for (let recipe of recipes) {
    if (!catList.includes(recipe.cuisine)) {
      catList.push(recipe.cuisine);
    }
  }
  const filterCat = (category) => {
    setCatData(recipes.filter((value) => value.cuisine === category));
    setTitle(category);
    return catData;
  };

  return (
    <>
      <div className="category-container">
        <h1 className="category-title">Välj en kategori</h1>
        <div className="category-container1">
          {catList.map((category) => (
            <div
              key={category}
              onClick={() => filterCat(category)}
              className="category-box"
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
        <h1 className="category-title">{title}</h1>
        <div className="cuisine-container">
          {catData.map((food, index) => (
            <Cards food={food} setRecData={setRecData} levelImg={levelImg} />
          ))}
        </div>
      </div>
    </>
  );
}

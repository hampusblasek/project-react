import { useEffect } from "react";
import { useState } from "react";
import "../CSS/home.css";

export function HomePage({
  recipes,
  setRecipes,
  fast,
  setFast,
  easy,
  setEasy,
  after,
  setAfter,
}) {
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
  const fastList = [];
  for (let recipe of recipes) {
    if (recipe.cookTimeMinutes + recipe.prepTimeMinutes < 40) {
      fastList.push(recipe);
    }
    console.log(fastList);
  } 

  const easyList = [];
  for (let recipe of recipes) {
    if (recipe.difficulty.includes("Easy")) {
      easyList.push(recipe);
    }
    console.log(easyList);
  } 
  
  const afterList = [];
  for (let recipe of recipes) {
    if (recipe.mealType.includes("Dessert")) {
      afterList.push(recipe);
    }
    console.log(afterList);
  } 

  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h2 className="hero-text">Vad är du sugen på?</h2>
        </div>
        <h2>Något snabblagat</h2>
        <div className="quick-box">
          {fastList.map((food) => (
            <div key={food.id}>
              <div>
                <img src={food.image} width="300" alt="" />
                  <p>{food.name}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Något Lättlagat</h2>
        <div className="easy-box">
          {easyList.map((food) => (
            <div>
              <div>
                <img src={food.image} width="300" alt="" />
                  <p>{food.name}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Efter maten</h2>
        <div className="cold-box">
          {afterList.map((food) => (
            <div>
              <div>
                <img src={food.image} width="300" alt="" />
                  <p>{food.name}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Något att dricka</h2>
        <div className="drink-box"></div>
      </div>
    </>
  );
}

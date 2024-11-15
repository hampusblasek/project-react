import { useEffect } from "react";
import { useState } from "react";
import { Under40 } from "../Components/Under40";
import { EasyCook } from "../Components/EasyCook";
import { AfterFood } from "../Components/After";
import { Drinks } from "../Components/Drinks";
import "../CSS/home.css";

export function HomePage({ recipes, setRecData, recData }) {
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
        <Under40 recipes={recipes} setRecData={setRecData} />

        <h2 className="h2-title">Något Lättlagat?</h2>
        <EasyCook recipes={recipes} setRecData={setRecData} />

        <h2 className="h2-title">Något sött?</h2>
        <AfterFood recipes={recipes} setRecData={setRecData} />

        <h2 className="h2-title">Något att dricka?</h2>
        <Drinks recipes={recipes} setRecData={setRecData} />
      </div>
    </>
  );
}

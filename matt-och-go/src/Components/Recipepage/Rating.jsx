import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useRecoilState } from "recoil";
import { ratingsState } from "../../App";
import { useState } from "react";
import "../../CSS/ratingStar.css";

export function BasicRating({ food }) {
  const [value, setValue] = useState(0); // state som tar emot värdet på betyget
  const [ratingState, SetRatingState] = useRecoilState(ratingsState); // state som innehåller alla betyg
  const isRated = ratingState.find((rating) => rating.id == food.id); // kollar om receptet redan har blivit betygsatt

  const changeRating = (id) => { // om användaren vill ändra eller ta bort sitt betyg
    SetRatingState(ratingState.filter((value) => value.id !== id));
  };

  const starRating = (value) => { // funktion där betyget sparas ner i ratingstate
    setValue(value);
    const newRating = { id: food.id, rating: value }; // objekt skapas med id på receptet och värdet på betyget
    SetRatingState([...ratingState, newRating]); // objektet läggs till i ratingstate
  };

  if (isRated) { // om användaren redan har satt betyg på receptet
    return (
      <>
        <div>
          <h2 className="title-text">Du har satt betyget</h2>
          <div className="star-rating">
            <h4 className="rating-text">{isRated.rating} av 5</h4>
            <img className="star-img" src="/star.svg" alt="" />
          </div>
          <div className="rating-btn-box">
            <button
              onClick={() => changeRating(isRated.id)}
              className="rating-btn"
            >
              Ta bort betyg
            </button>
          </div>
        </div>
      </>
    );
  }

  return ( // om användaren inte har satt något betyg på receptet
    <div>
      <h2 className="rating-title">Sätt ditt betyg på receptet</h2>
      <div className="rating-star-box">
        <Box>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              starRating(newValue);
            }}
            size="large"
          />
        </Box>
      </div>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { ratingsState } from "../App";
import { useState } from "react";
import "../CSS/ratingStar.css";

export function BasicRating({ food }) {
  const [value, setValue] = useState([]);
  const [ratingState, SetRatingState] = useRecoilState(ratingsState);
  const isRated = ratingState.find((rating) => rating.name == food.name);

  const changeRating = (name) => {
    SetRatingState(ratingState.filter((value) => value.name !== name));
  };

  const starRating = (value) => {
    setValue(value);
    const newRating = { name: food.name, rating: value };
    SetRatingState([...ratingState, newRating]);
  };

  if (isRated) {
    console.log(isRated);
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
              onClick={() => changeRating(isRated.name)}
              className="rating-btn"
            >
              Ändra betyget
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <h2 className="rating-title">Sätt ditt betyg på receptet</h2>
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
  );
}

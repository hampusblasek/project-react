import { useState } from "react";
import "../../CSS/converter.css";
//Måttomvandlaren
export function MessurementConverter({ open, setOpen }) {
  const [value1, setValue1] = useState(null); // state som håller det första värdet av selectmenyn
  const [value2, setValue2] = useState(null); // state som håller det andra värdet av selectmenyn
  //Deklarerar variabler med måttens volym i ml
  const krm = 1;
  const tsk = 5;
  const msk = 15;
  const dl = 100;
  const cup = 240;
  const pint = 570;
  const liter = 1000;
  const gallon = 3785;
  let sum = value2 / value1; // Räknar ut summan av användarens val

  const numberOfSum = () => { // funktion som bestämmer vad som ska stå längst ner i konverteraren
    if (!sum) {
      return "Välj mått ovan för att se ditt svar här!";
    } else {
      const shortSum = sum.toFixed(2);
      return "Svar: " + shortSum;
    }
  };

  return (
    <>
      <div className="converter-container">
        <div className="exit-box">
          <img
            onClick={() => setOpen(!open)}
            className="exit-icon"
            src="/exit.svg"
            alt="ett kryss"
            title="Stäng"
          />
        </div>
        <h2 className="converter-title">Använd gärna vår måttomvandlare</h2>
        <div className="converter-box">
          <p>Hur många</p>
          <form action="">
            <select
              onChange={(event) => setValue1(event.target.value)}
              name="messure"
              id="messure"
            >
              <option>Välj</option>
              <option value={gallon}>Gallon</option>
              <option value={liter}>Liter</option>
              <option value={pint}>Pint</option>
              <option value={cup}>Cup</option>
              <option value={dl}>Deciliter</option>
              <option value={msk}>Matskedar</option>
              <option value={tsk}>Teskedar</option>
              <option value={krm}>Kryddmått</option>
            </select>
            <p> går det på en</p>
            <select
              onChange={(event) => setValue2(event.target.value)}
              name="messure"
              id="messure"
            >
              <option>Välj</option>
              <option value={gallon}>Gallon</option>
              <option value={liter}>Liter</option>
              <option value={pint}>Pint</option>
              <option value={cup}>Cup</option>
              <option value={dl}>Deciliter</option>
              <option value={msk}>Matskedar</option>
              <option value={tsk}>Teskedar</option>
              <option value={krm}>Kryddmått</option>
            </select>
          </form>
        </div>
        <p className="converter-answer">
          <span>{numberOfSum()}</span>
        </p>
      </div>
    </>
  );
}

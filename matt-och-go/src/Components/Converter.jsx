import { useState } from "react";
import "../CSS/converter.css";


export function MessurementConverter() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const krm = 1;
  const tsk = 5;
  const msk = 15;
  const dl = 100;
  let sum = value2 / value1;

  if (!sum) {
    return (
      <>
        <h2>Använd gärna våran måttomvandlare</h2>
        <form action="">
          <select
            onChange={(event) => setValue1(event.target.value)}
            name="messure"
            id="messure"
          >
            <option>Välj</option>
            <option value={dl}>Deciliter</option>
            <option value={msk}>Matskedar</option>
            <option value={tsk}>Teskedar</option>
            <option value={krm}>Kryddmått</option>
          </select>
          <select
            onChange={(event) => setValue2(event.target.value)}
            name="messure"
            id="messure"
          >
            <option>Välj</option>
            <option value={dl}>Deciliter</option>
            <option value={msk}>Matskedar</option>
            <option value={tsk}>Teskedar</option>
            <option value={krm}>Kryddmått</option>
          </select>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div>
          <p>
            Det går <span>{sum}</span>
          </p>
          <form action="">
            <select
              onChange={(event) => setValue1(event.target.value)}
              name="messure"
              id="messure"
            >
              <option>Välj</option>
              <option value={dl}>Deciliter</option>
              <option value={msk}>Matskedar</option>
              <option value={tsk}>Teskedar</option>
              <option value={krm}>Kryddmått</option>
            </select>
            <p>på en</p>
            <select
              onChange={(event) => setValue2(event.target.value)}
              name="messure"
              id="messure"
            >
              <option>Välj</option>
              <option value={dl}>Deciliter</option>
              <option value={msk}>Matskedar</option>
              <option value={tsk}>Teskedar</option>
              <option value={krm}>Kryddmått</option>
            </select>
          </form>
        </div>
      </>
    );
  }
}

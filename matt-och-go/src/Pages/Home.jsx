import { Under40 } from "../Components/homepage/Under40";
import { EasyCook } from "../Components/homepage/EasyCook";
import { AfterFood } from "../Components/homepage/After";
import { Drinks } from "../Components/homepage/Drinks";
import { useRecoilState } from "recoil";
import { recipeState } from "../App";

export function HomePage({ levelImg }) {
  const [recipes] = useRecoilState(recipeState); // state som innehåller alla recept

  const shortList = recipes.slice(0, 4);
  console.log(shortList);

  if (!recipes) {
    return <p>Laddar...</p>; // om det inte finns några recept
  }

  return (
    <>
      <div className="home-container">
        <div className="hero">
          {/* <h2 className="hero-text">Vad är du sugen på?</h2> */}
          <input className="input-search" type="text" />
          <div className="drop-down-search">
            <div className="drop-box">
              {shortList.map((short) => (
                <div className="card-drop">
                  <img className="img-search" src={short.image} alt="" />
                  <div>
                    <p>{short.name}</p>
                    <div className="card-bottom-search">
                      <div className="bottom-section">
                        <img
                          className="card-icon"
                          src="/time-green.svg"
                          alt="En klocka"
                        />
                        <p className="card-time-search">
                          {short.cookTimeMinutes + short.prepTimeMinutes}{" "}
                          minuter
                        </p>
                      </div>
                      <div className="bottom-section">
                        <img
                          className="card-icon"
                          src={levelImg(short.difficulty)}
                          alt=""
                        />
                        {/*  <img className="card-icon" src="/hard.svg" alt="" /> */}
                        <p>{short.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="show-more">Visa fler</div>
            </div>
          </div>
        </div>
        <h2 className="h2-title">Färdigt på under 40 min!</h2>
        <Under40 levelImg={levelImg} recipes={recipes} />

        <h2 className="h2-title">Något Lättlagat?</h2>
        <EasyCook levelImg={levelImg} recipes={recipes} />

        <h2 className="h2-title">Något sött?</h2>
        <AfterFood levelImg={levelImg} recipes={recipes} />

        <h2 className="h2-title">Något att dricka?</h2>
        <Drinks levelImg={levelImg} recipes={recipes} />
      </div>
    </>
  );
}

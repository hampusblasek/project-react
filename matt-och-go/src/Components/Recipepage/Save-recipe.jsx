import { useRecoilState } from "recoil";
import { saveRecState } from "../../App";

export function HeartIcon({ setSnackState, food }) {
  const [saveRec, setSaveRec] = useRecoilState(saveRecState); // state som lagrar sparade recept

  let heartStatus;
//Funktion som lägger till eller tar bort recept i sparade recept
  const saveRecipe = (food, newState) => {
    const isSaved = saveRec.find((save) => save.id == food.id);
    if (!isSaved) {
      setSaveRec([...saveRec, food]); // sparar receptet i sparade recept
      setSnackState({ ...newState, snackOpen: true }); //Snackbaren visas
      setTimeout(() => {
        setSnackState({ ...newState, snackOpen: false }); // Snackbaren slutar visas efter 3 sekunder
      }, 3000);
    } else {
      setSaveRec(saveRec.filter((item) => item.id !== food.id)); // Tar bort receptet från sparade recept
      setSnackState({ ...newState, snackOpen: true });
      setTimeout(() => {
        setSnackState({ ...newState, snackOpen: false });
      }, 3000);
    }
  };
 //Funktion avgör om det ska visas ett rött eller grått hjärta
  const heartImg = (food) => {
    const savedRecipe = saveRec.find((save) => save.id === food.id);
    let image = "";
    if (savedRecipe) {
      image = "/heart.svg";
      heartStatus = "Ta bort";
      return image;
    } else {
      image = "/heart-grey.svg";
      heartStatus = "Spara recept";
      return image;
    }
  };
  return (
    <>
      <img
        onClick={() =>
          saveRecipe(food, { vertical: "bottom", horizontal: "center" })
        }
        className="food-icon-2"
        src={heartImg(food)}
        alt="Ett hjärta"
        title={heartStatus}
      />
    </>
  );
}

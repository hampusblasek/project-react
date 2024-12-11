//Funktion som jämför svårighetsgrad på recept med bild

const levelImg = (food) => {
  let img = "";
  if (food === "Easy") {
    img = "/easy.svg";
    return img;
  } else if (food == "Medium") {
    img = "/medium.svg";
    return img;
  } else {
    img = "/hard.svg";
    return img;
  }
};

export default levelImg;

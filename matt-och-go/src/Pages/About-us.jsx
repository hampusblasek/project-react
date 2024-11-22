import { AccordionUsage } from "../Components/DropDown";
import "../CSS/about-us.css";

export function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <h1 className="about-title">Alla kan laga mat!</h1>
        <div className="about-box">
          <div className="text-box">
            <h2 className="about-h2">Vår syn på matlagning är att "Alla kan laga mat!"</h2>
            <p className="about-p">
              Att laga mat är inte bara kul, det är givande och en perfekt
              aktivitet för hela familjen
            </p>
          </div>
          <div className="about-img-box">
            <img className="about-img" src="/cooking.jpg" alt="" />
          </div>
        </div>

        <div className="about-box">
          <div>
            <img className="about-img" src="/chef.jpg" alt="" />
          </div>
          <div className="text-box">
            <h2 className="about-h2">Våra kockar vet vad du behöver för att lyckas!</h2>
            <p>
              Vi har tagit fram recept för dig, oavsett dina tidigare
              erfarenheter
            </p>
          </div>
        </div>
        <div className="expand-box">
            <div className="expand">
                <AccordionUsage/>
            </div>
        </div>
      </div>
    </>
  );
}

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export function AccordionUsage() {
    const icon = <img className='arrow-img' src="/arrow.svg" alt="" />
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={icon}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Varför gör ni detta?
        </AccordionSummary>
        <AccordionDetails>
          I en tid där ohälsosam mat är lätt att få tag på har vi tagit på oss ett uppdrag. Det uppdraget är att
          inspirera alla männsikor med recept som är fantastiskt goda och dessutom bra för dig.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={icon}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Är det gratis att använda era recept?
        </AccordionSummary>
        <AccordionDetails>
         Då vi vill sprida inspiration till alla Sveriges hörn så är våra recept helt kostnadsfria att använda.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={icon}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Kan jag lägga till egna recept?
        </AccordionSummary>
        <AccordionDetails>
          Just nu är det inte möjligt att lägga till egna recept, men vi kollar på en lösning till detta.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={icon}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Har ni några matlagningskurser?
        </AccordionSummary>
        <AccordionDetails>
          Just nu anordnar vi bara matlagningskurser i Stockholm, men jobbar på att etablera oss på flera orter.
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

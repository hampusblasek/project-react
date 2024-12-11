import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red, blue, purple } from "@mui/material/colors";
import "../CSS/footer.css";
//Footer
export function Footer() {
  const preventDefault = (event) => event.preventDefault();
  //Hämtar färgerna till ikonerna
  const youtube = red[500];
  const facebook = blue[900];
  const linkedIn = blue[800];
  const instagram = purple["A400"];

  return (
    <>
      <footer>
        <Box>
          <img src="/logo2.png" alt="" />
        </Box>
        <Box
          sx={{
            typography: "body1",
            "& > :not(style) ~ :not(style)": {
              ml: 4,
            },
          }}
          onClick={preventDefault}
        >
          <Link
            fontSize={18}
            color="inherit"
            component="button"
            variant="body2"
            onClick={() => {}}
          >
            Bli en av oss
          </Link>
          <Link
            fontSize={18}
            color="inherit"
            component="button"
            variant="body2"
            onClick={() => {}}
          >
            Om oss
          </Link>
          <Link
            fontSize={18}
            color="inherit"
            component="button"
            variant="body2"
            onClick={() => {}}
          >
            Kontakta oss
          </Link>
        </Box>
        <Box
          sx={{
            typography: "body1",
            "& > :not(style) ~ :not(style)": {
              ml: 3,
            },
          }}
        >
          <FacebookIcon fontSize="large" sx={{ color: facebook }} />
          <InstagramIcon fontSize="large" sx={{ color: instagram }} />
          <LinkedInIcon fontSize="large" sx={{ color: linkedIn }} />
          <YouTubeIcon fontSize="large" sx={{ color: youtube }} />
        </Box>
      </footer>
    </>
  );
}

/* eslint-disable import/prefer-default-export */
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

// components
import { Typography, Button, Container } from "@mui/material";

// icons
import { DoubleArrow } from "@mui/icons-material";

// images
import ilustration1 from "../../public/images/illustration1.jpg";
import ilustration2 from "../../public/images/illustration2.jpg";

// styles
import theme from "../../styles/Theme.module.scss";

let fontTheme = createTheme();
fontTheme = responsiveFontSizes(fontTheme);

// images
export const ContentCaptions: any[] = [
  {
    url: ilustration1,
    text: "test1",
    caption: (
      <ThemeProvider theme={fontTheme}>
        <Container>
          <Typography variant="h3">
            Create and grow your unique website today
          </Typography>
          <Typography variant="subtitle1" className="mt-4">
            Programmaticaly work but low hanging fruit so new economy
            cross-poltination. Quick sync new economy onward and upward.
          </Typography>
          <div className="mt-3">
            <Button variant="contained" className={theme.btn2}>
              LEARN MORE
            </Button>
            <Button variant="contained" className={theme.btn1}>
              CONTACT US
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    ),
  },
  {
    url: ilustration2,
    text: "test2",
    caption: (
      <ThemeProvider theme={fontTheme}>
        <Container>
          <Typography variant="subtitle2" className={theme.subtitle1}>
            Profitable Days
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: "ChristianSunday" }}>
            Make Your Dream Come True
          </Typography>
          <Typography variant="subtitle1" className="mt-4">
            Realize that dreams don&apos;t come true overnight while you&apos;re
            sleeping.
          </Typography>
          <div className="mt-3">
            <Button
              variant="contained"
              className={`${theme.btn2} rounded-full`}
              endIcon={<DoubleArrow />}
            >
              View More
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    ),
  },
  {
    url: "https://source.unsplash.com/1500x1500/?marine&page=3",
    text: "test3",
    caption: (
      <ThemeProvider theme={fontTheme}>
        <Container>
          <Typography variant="h3">
            Order Now and Bring Your Business Online
          </Typography>
          <div className="mt-5">
            <Button variant="contained" className={theme.btn2}>
              LEARN MORE
            </Button>
            <Button variant="contained" className={theme.btn1}>
              CONTACT US
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    ),
  },
];

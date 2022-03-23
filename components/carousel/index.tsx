import type { NextPage } from "next";
import { useState, useEffect } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

// components
import Image from "next/image";
import { Typography, Button, Container } from "@mui/material";
import { Carousel as CarouselSection } from "react-responsive-carousel";

// icons
import { DoubleArrow } from "@mui/icons-material";

// images
import ilustration1 from "../../public/images/illustration1.jpg";
import ilustration2 from "../../public/images/illustration2.jpg";

// styles
import theme from "../../styles/Theme.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

let fontTheme = createTheme();
fontTheme = responsiveFontSizes(fontTheme);

const Carousel: NextPage = () => {
  // state
  const [yOffset, setYOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // images
  const items: any[] = [
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
              Realize that dreams don&apos;t come true overnight while
              you&apos;re sleeping.
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

  // handle scroll
  const handleScroll = () => setYOffset(window.scrollY);

  // component did mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <CarouselSection
        onChange={(index) => setActiveSlide(index)}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={3000}
        autoPlay
      >
        {items.map((data, index) => (
          <div key={index}>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                marginTop: "11vw",
                zIndex: 1,
                backgroundColor: "#000",
                opacity: 0.5,
              }}
            >
              -
            </div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                marginTop: "11vw",
                zIndex: 1,
              }}
            >
              <div
                className={`w-full h-full flex justify-center items-center text-white ${
                  activeSlide === index ? theme.fadeIn : ""
                }`}
              >
                {data.caption}
              </div>
            </div>
            <div style={{ height: "50vw", minHeight: "400px" }}>
              <div
                style={{
                  marginTop: "-11vw",
                  width: "100vw",
                  height: "150vw",
                  transform: `translateY(${yOffset * 0.5}px)`,
                }}
              >
                <Image src={data.url} layout="fill" alt="carousel" />
              </div>
            </div>
          </div>
        ))}
      </CarouselSection>
    </div>
  );
};

export default Carousel;

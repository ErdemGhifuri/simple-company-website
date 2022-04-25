import type { NextPage } from "next";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import propTypes from "prop-types";

// components
import { Container, Typography, Grid, Box } from "@mui/material";
import Animate from "../Animate";

// images
import img from "../../public/images/about.jpg";

// styles
import theme from "../../styles/Theme.module.scss";

const About: NextPage<{ yOffset: any }> = ({ yOffset }) => {
  const ref: any = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fadeIn = ref.current
      ? yOffset > ref.current.getBoundingClientRect().top
      : false;
    if (fadeIn) setIsVisible(true);
  }, [yOffset]);

  return (
    <main className={`${theme.about} py-32`} style={{ overflowX: "hidden" }}>
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <Grid item style={{ opacity: isVisible ? 1 : 0 }} sm={6}>
            <Animate
              animationIn="fadeInLeft"
              animationOut="fadeOutRight"
              isVisible={isVisible}
            >
              <Image layout="intrinsic" src={img} alt="about" />
            </Animate>
          </Grid>
          <Grid item style={{ opacity: isVisible ? 1 : 0 }} sm={6}>
            <Animate
              animationIn="fadeInLeft"
              animationOut="fadeOutRight"
              isVisible={isVisible}
            >
              <hr />
            </Animate>
            <br />
            <Animate
              animationIn="fadeInRight"
              animationOut="fadeOutLeft"
              isVisible={isVisible}
            >
              <Typography variant="h2" component="div" gutterBottom ref={ref}>
                About Us
              </Typography>
              <Box>
                <Typography variant="h5" component="div" textAlign="justify">
                  Wolfram is the world’s tech company worldwide coordinations
                  supplier — we dominate major functions, e-commerce channels,
                  and information of the entire Internet ecosystem. Wolfram have
                  a reputation for innovation, spending large sums of money
                  annually on research and development. Our worth added
                  administrations guarantee the progression of products proceeds
                  consistently and supply chains stay lean and streamlined for
                  progress.
                </Typography>
              </Box>
            </Animate>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

About.propTypes = {
  yOffset: propTypes.number,
};

About.defaultProps = {
  yOffset: 0,
};

export default About;

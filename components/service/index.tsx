import type { NextPage } from "next";
import { useRef, useEffect, useState } from "react";
import propTypes from "prop-types";

// components
import { Container, Typography, Button } from "@mui/material";
import Animate from "../Animate";
import ServiceCard from "./components/ServiceCard";

// styles
import theme from "../../styles/Theme.module.scss";

// image
import softwareDev from "../../public/images/svg/software-dev.svg";
import biology from "../../public/images/svg/biology.svg";
import blueprint from "../../public/images/svg/blueprint.svg";

const services = [
  {
    title: "Software Development",
    content: "Assist you to create your dream application from scratch to MVP",
    imageUrl: softwareDev.src,
  },
  {
    title: "UI/UX Design",
    content:
      "Let us know your needs and we will transform them into a suitable application framework",
    imageUrl: blueprint.src,
  },
  {
    title: "Data Analysis",
    content:
      "We will guide you to determine the meaning of a huge messy data that you have",
    imageUrl: biology.src,
  },
];

const Service: NextPage<{ yOffset: any }> = ({ yOffset }) => {
  const ref: any = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fadeIn = ref.current
      ? yOffset > ref.current.getBoundingClientRect().top
      : false;
    if (fadeIn) setIsVisible(true);
  }, [yOffset]);
  return (
    <main className={`${theme.service} py-32`} style={{ overflowX: "hidden" }}>
      <Container maxWidth="xl">
        <div style={{ opacity: isVisible ? 1 : 0 }}>
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
            <Typography variant="h2" component="div" gutterBottom>
              Services We Offer
            </Typography>
          </Animate>
          <Animate
            animationIn="zoomIn"
            animationOut="zoomOut"
            isVisible={isVisible}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((element, index) => (
                <ServiceCard
                  imageUrl={element.imageUrl}
                  key={index}
                  title={element.title}
                  content={element.content}
                  action={<Button size="small">Learn More</Button>}
                />
              ))}
            </div>
            <div ref={ref} />
          </Animate>
        </div>
      </Container>
    </main>
  );
};

Service.propTypes = {
  yOffset: propTypes.number,
};

Service.defaultProps = {
  yOffset: 0,
};

export default Service;

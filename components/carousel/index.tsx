import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// components
import Image from "next/image";
import { Carousel as CarouselSection } from "react-responsive-carousel";

// styles
import "react-responsive-carousel/lib/styles/carousel.min.css";

// captions
import { ContentCaptions } from "./ContentCaptions";

// animated component dynamic import
const Animate: any = dynamic(
  (): any => import("react-animated-css").then((mod) => mod.Animated),
  {
    ssr: false,
  }
);

const Carousel: NextPage = () => {
  // state
  const [yOffset, setYOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // handle parallax scroll
  const handleScroll = () => setYOffset(window.scrollY);

  // component did mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <CarouselSection
        onChange={(index) => setTimeout(() => setActiveSlide(index), 500)}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={3000}
        autoPlay
      >
        {ContentCaptions.map((data, index) => (
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
              <Animate
                animationIn="fadeInUp"
                animationOut="fadeOutDown"
                isVisible={activeSlide === index}
                className="w-full h-full flex justify-center items-center text-white"
              >
                {data.caption}
              </Animate>
            </div>
            <div style={{ height: "50vw", minHeight: "400px" }}>
              <div
                style={{
                  marginTop: "-11vw",
                  width: "100vw",
                  height: "150vw",
                  position: "relative",
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

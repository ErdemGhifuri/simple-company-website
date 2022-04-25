import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { AnimatedProps } from "react-animated-css";

// animated component dynamic import
const Animate: ComponentType<AnimatedProps> = dynamic(
  (): any => import("react-animated-css").then((mod) => mod.Animated),
  { ssr: false }
);

export default Animate;

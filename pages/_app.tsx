import "../styles/globals.scss";
import "../styles/animated.min.scss";
import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material/styles";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StyledEngineProvider injectFirst>
    <Component {...pageProps} />
  </StyledEngineProvider>
);

export default MyApp;

import type { NextPage } from "next";

// components
import { Container } from "@mui/material";

// styles
import theme from "../../styles/Theme.module.scss";

const Footer: NextPage = () => (
  <footer className={`${theme.footer} py-8`} style={{ overflowX: "hidden" }}>
    <Container maxWidth="xl">
      Powered by{" "}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ghifari-raihan/"
        rel="noreferrer"
      >
        Ghifari Raihan
      </a>
    </Container>
  </footer>
);

export default Footer;

import type { NextPage } from "next";

// components
import Image from "next/image";
import Link from "next/link";

import { AppBar, Toolbar, Typography, Container } from "@mui/material";

import MenuPc from "./components/MenuPc";
import MenuMobile from "./components/MenuMobile";
import UpperBanner from "./components/UpperBanner";

// images
import logo from "../../public/images/logo.png";

// styles
import theme from "../../styles/Theme.module.scss";

// menu
const pages = [
  { text: "Home", url: "#" },
  { text: "About", url: "#" },
  { text: "Service", url: "#" },
  { text: "Contact", url: "#" },
];

const Navigation: NextPage = () => (
  <AppBar className={theme.navigation} position="static">
    <UpperBanner />
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        <div>
          <Typography
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            className="p-4"
          >
            <div className="grid grid-cols-2 gap-2 items-center justify-center">
              <Link href="/" passHref>
                <div className="justify-self-end" style={{ width: "50px" }}>
                  <Image src={logo} alt="logo" />
                </div>
              </Link>
              <span
                className="py-0 my-0"
                style={{ fontSize: "18pt", fontWeight: "bold" }}
              >
                Wolfram
              </span>
            </div>
          </Typography>
        </div>

        <MenuMobile pages={pages} />
        <div className="w-full contents">
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="p-4"
          >
            <div className="grid grid-cols-2 gap-2 items-center justify-center">
              <Link href="/" passHref>
                <div className="justify-self-end" style={{ width: "50px" }}>
                  <Image src={logo} alt="logo" />
                </div>
              </Link>
              <span
                className="py-0 my-0"
                style={{ fontSize: "18pt", fontWeight: "bold" }}
              >
                Wolfram
              </span>
            </div>
          </Typography>
        </div>
        <MenuPc pages={pages} />
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navigation;

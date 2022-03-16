import { Box, Container } from "@mui/material";

// styles
import theme from "../../../styles/Theme.module.scss";

const UpperBanner = () => (
  <Box className={theme.banner} sx={{ display: { xs: "none", md: "inherit" } }}>
    <Container className="flex justify-between">
      <div className="py-2">
        FREE express international delivery + EASY returns
      </div>
      <div className="py-2 grid grid-cols-3 gap-4">
        <div className="col-auto text-center">
          <a href="#">ABOUT</a>
        </div>
        <div className="col-auto text-center">
          <a href="#">FAQ</a>
        </div>
        <div className="col-auto text-center">
          <a href="#">CONTACT US</a>
        </div>
      </div>
    </Container>
  </Box>
);

export default UpperBanner;

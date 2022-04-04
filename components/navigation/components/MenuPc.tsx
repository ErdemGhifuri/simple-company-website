import type { NextPage } from "next";
import propTypes from "prop-types";

// components
import { Box, Button, Typography, Link } from "@mui/material";

const MenuPc: NextPage<{ pages: any }> = ({ pages }) => (
  <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    <div className="flex justify-center w-3/4">
      {pages.map((page: any, index: number) => (
        <div key={index}>
          <Link href={page.url} style={{ cursor: "pointer" }}>
            <Button
              variant="text"
              color="inherit"
              sx={{ width: "100px", textTransform: "none" }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {page.text}
              </Typography>
            </Button>
          </Link>
        </div>
      ))}
    </div>
  </Box>
);

MenuPc.propTypes = {
  pages: propTypes.arrayOf(propTypes.objectOf(propTypes.string)),
};

MenuPc.defaultProps = {
  pages: [],
};

export default MenuPc;

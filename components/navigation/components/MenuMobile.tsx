import type { NextPage } from "next";
import { useState } from "react";
import propTypes from "prop-types";

// components
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Link,
} from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";

const MenuMobile: NextPage<{
  pages: any;
}> = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page: any, index: number) => (
          <Link
            key={index}
            href={page.url}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center" fontStyle="Helveltica">
                {page.text}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
};

MenuMobile.propTypes = {
  pages: propTypes.arrayOf(propTypes.objectOf(propTypes.string)),
};

MenuMobile.defaultProps = {
  pages: [],
};

export default MenuMobile;

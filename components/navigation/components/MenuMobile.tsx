import type { NextPage } from "next";
import { useState } from "react";
import propTypes from "prop-types";

// components
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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
        {pages.map((page: string) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center" fontStyle="Helveltica">
              {page}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

MenuMobile.propTypes = {
  pages: propTypes.arrayOf(propTypes.string),
};

MenuMobile.defaultProps = {
  pages: [],
};

export default MenuMobile;

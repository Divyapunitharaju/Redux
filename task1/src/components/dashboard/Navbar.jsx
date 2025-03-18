import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar,
  Box,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("User logged out");
    handleMenuClose();
    navigate("/");
  };

  return (
    <Paper
      sx={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        border: "none",
        margin: 0,
        padding: 0,
      }}
      elevation={0}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          zIndex: 100,
          top: 0,
        }}
      >
        <Toolbar>
          <IconButton aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon sx={{ fontSize: "18px" }} />
          </IconButton>

          <IconButton aria-label="mail">
            <MailIcon sx={{ fontSize: "18px" }} />
          </IconButton>
          <IconButton aria-label="favorites">
            <StarIcon sx={{ fontSize: "18px" }} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton aria-label="search">
            <SearchIcon sx={{ fontSize: "18px" }} />
          </IconButton>
          <IconButton aria-label="notifications">
            <Badge badgeContent={3} color="primary">
              <NotificationsIcon sx={{ fontSize: "18px" }} />
            </Badge>
          </IconButton>
          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon sx={{ fontSize: "18px" }} />
            </Badge>
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Typography variant="body1" sx={{ mx: 1, fontSize: "12px" }}>
              <b>Divya</b>
            </Typography>
            <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
              <Avatar
                src="https://via.placeholder.com/40"
                sx={{ width: 28, height: 28 }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Navbar;

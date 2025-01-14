import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InventoryIcon from "@mui/icons-material/Inventory";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HelpIcon from "@mui/icons-material/Help";
import streamifyLogo from "../assets/streamify.svg";
import { NavLink, useLocation } from "react-router-dom";
const SidePanel = () => {
  let location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isSelected, setIsSelected] = useState(location.pathname);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const menuItems = [
    { text: "Overview", icon: <DashboardIcon />, path: "/" },
    { text: "Revenue", icon: <MonetizationOnIcon />, path: "/revenue" },
    { text: "Products", icon: <InventoryIcon />, path: "/products" },
    { text: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
  ];
  const footerItems = [
    { text: "Feedback", icon: <FeedbackIcon />, path: "/feedback" },
    { text: "Help and docs", icon: <HelpIcon />, path: "/help" },
  ];

  const handleItemClick = (item) => {
    setIsSelected(item.path);
  };

  const drawerContent = (
    <>
      {/* Logo and Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Typography
          sx={{ fontWeight: 600, fontSize: "24px", color: "#111827" }}
        >
          Streamify
        </Typography>
        <Avatar alt="streamify logo" src={streamifyLogo} />
      </Box>
      {/* Main Menu Section */}
      <Typography
        variant="subtitle2"
        sx={{
          padding: "16px 16px 8px 16px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#6B7280",
          textTransform: "uppercase",
        }}
      >
        Main Menu
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            selected={item.path === isSelected}
            LinkComponent={NavLink}
            to={item.path}
            onClick={() => handleItemClick(item)}
            sx={{
              margin: "4px 16px",
              borderRadius: "8px",
              backgroundColor:
                item.path === isSelected ? "#D1FAE5" : "transparent",
              "&:hover": { backgroundColor: "#E5E7EB" },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "36px",
                color: item.path === isSelected ? "#047857" : "#6B7280",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: item.path === isSelected ? "#047857" : "#374151",
              }}
            />
          </ListItemButton>
        ))}
      </List>
      {/* Divider */}
      <Divider sx={{ margin: "16px 0" }} />
      {/* Footer Section */}
      <Typography
        variant="subtitle2"
        sx={{
          padding: "16px 16px 8px 16px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#6B7280",
          textTransform: "uppercase",
        }}
      >
        Settings
      </Typography>
      <List>
        {footerItems.map((item, index) => (
          <ListItemButton
            key={index}
            selected={item.path === isSelected}
            LinkComponent={NavLink}
            to={item.path}
            onClick={() => handleItemClick(item)}
            sx={{
              margin: "4px 16px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#E5E7EB" },
            }}
          >
            <ListItemIcon sx={{ minWidth: "36px", color: "#6B7280" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#374151",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </>
  );
  return (
    <>
      {/* Top Menu Button for Small Screens */}
      {isSmallScreen && (
        <IconButton
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            top: 16,
            left: 16,
          }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Side Panel */}
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        sx={{
          width: { xs: "250px", sm: "300px" },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: { xs: "250px", sm: "300px" },
            boxSizing: "border-box",
            backgroundColor: "#F9FAFB",
            borderRight: "1px solid #E5E7EB",
          },
        }}
        open={isSmallScreen ? isDrawerOpen : true}
        onClose={() => setIsDrawerOpen(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};
export default SidePanel;

//* LIB
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "@mui/material";

//*IMPORT
import logo from "../assets/logoProfile.png";

const NavBar = ({ textColor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigateToSection = (sectionId) => {
    window.location.hash = sectionId;
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", to: "hero" }, // Đảm bảo giá trị 'to' phù hợp với cấu hình route của bạn
    { label: "About", to: "about" },
    { label: "Technologies", to: "technologies" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "project" },
    { label: "Contacts", to: "contact" },
  ];

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, mr: 2 }}>
          <a
            href="https://github.com/NguyenVoTien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo}
              alt="New Logo"
              style={{ height: "50px", borderRadius: "50%" }}
            />
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: textColor,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: isMobile ? "flex" : "none",
              bgcolor: "transparent",
            }}
            onClick={toggleDrawer(true)}
          >
            <a
              href="https://github.com/NguyenVoTien"
              target="_blank"
              rel="noopener noreferrer"
              style={{ pointerEvents: "none" }} // Disable click effects and interactions
            >
              <Box
                sx={{
                  width: 30, // Kích thước của logo
                  height: 30, // Đảm bảo logo có kích thước phù hợp
                  backgroundImage: `url(${logo})`, // Thay `${logo}` bằng đường dẫn của logo bạn muốn sử dụng
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  marginRight: "8px",
                  borderRadius: "20px", // Khoảng cách giữa logo và MenuIcon
                }}
              />
            </a>
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer
          anchor={"right"}
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              background: "transparent",
            },
          }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <a
              href="https://github.com/NguyenVoTien"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "60px",
                  backgroundImage: `url(${logo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              />
            </a>
            {menuItems.map((item) => (
              <Box
                key={item.label}
                sx={{
                  padding: 2,
                  borderBottom: "1px solid #ccc",
                  color: textColor,
                }}
                onClick={() => navigateToSection(item.to)}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        </Drawer>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.facebook.com/profile.php?id=100010186753030"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ color: "#0e76a8" }}>
              <FaFacebook />
            </IconButton>
          </a>
          <a
            href="https://github.com/NguyenVoTien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ color: "#000000" }}>
              <FaGithub />
            </IconButton>
          </a>
          <a
            href="https://x.com/anotherHed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ color: "#1DA1F2" }}>
              <FaTwitter />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/2805_tien/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ color: "#8a3ab9" }}>
              <FaInstagram />
            </IconButton>
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

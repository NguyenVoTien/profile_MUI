//* LIB
import { useState } from "react";
import {
  CssBaseline,
  Box,
  Container,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

//* IMPORT
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
    },
    secondary: {
      main: "#03dac6",
    },
    neutral: {
      900: "#333333",
      400: "#bdbdbd",
    },
    purple: {
      100: "#d1c4e9",
      800: "#6a1b9a",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    overflowX: "hidden",
    color: theme.palette.neutral[900], // Sửa từ 300 thành 900 để chọn màu chính xác từ palette
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    "&::selection": {
      backgroundColor: "#22d3ee",
      color: "#164e63",
    },
    position: "relative",
    zIndex: 0,
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    transition: "background-color 0.3s ease", // Thêm transition vào để có hiệu ứng mượt hơn
  },
  contentContainer: {
    position: "relative",
    zIndex: 1,
    paddingTop: "64px",
  },
  section: {
    scrollMarginTop: "70px",
  },

  lightModeBackground: {
    position: "absolute",
    top: 0,
    zIndex: -2,
    height: "100vh",
    width: "100%",
    transform: "rotate(180deg)",
    background: "white",
    backgroundImage:
      "radial-gradient(60% 120% at 50% 50%, hsla(0,0%,100%,0) 0, rgba(252,205,238,.5) 100%)",
  },
}));

function App() {
  const classes = useStyles();
  const [backgroundColor, setBackgroundColor] = useState("#27272a");
  const [textColor, setTextColor] = useState("#c5c5d1");
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleBackground = () => {
    setDarkMode(!darkMode);
    setBackgroundColor((prevColor) =>
      prevColor === "#27272a" ? "#b9b9be" : "#27272a"
    );
    setTextColor((prevColor) =>
      prevColor === "#c5c5d1" ? "#60606e" : "#c5c5d1"
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <CssBaseline />
        <Box
          className={classes.background}
          style={{ backgroundColor: backgroundColor, color: textColor }}
        />
        <IconButton
          color="primary"
          onClick={handleToggleBackground}
          style={{ position: "fixed", top: 50, right: 20, zIndex: 1000 }} // Ensure it's above other elements
        >
          {darkMode ? <NightsStayIcon /> : <WbSunnyIcon />}
        </IconButton>
        <NavBar textColor={textColor} />
        <Box className={classes.contentContainer}>
          <Container>
            <Box mt={9} id="hero" className={classes.section}>
              <Hero textColor={textColor} />
            </Box>
            <Box mt={9} id="about" className={classes.section}>
              <About textColor={textColor} />
            </Box>
            <Box mt={9} id="technologies" className={classes.section}>
              <Technologies textColor={textColor} />
            </Box>
            <Box mt={9} id="experience" className={classes.section}>
              <Experience textColor={textColor} />
            </Box>
            <Box mt={9} id="project" className={classes.section}>
              <Project textColor={textColor} />
            </Box>
            <Box mt={9} id="contact" className={classes.section}>
              <Contact textColor={textColor} />
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

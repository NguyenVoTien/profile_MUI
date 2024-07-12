import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/profilePic.png";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Hero = ({ textColor }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Kích hoạt chỉ 1 lần khi vào view port
    threshold: 0.1, // Ngưỡng xem bao nhiêu phần trăm phần tử trong view port để kích hoạt
  });

  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    let timeout;
    if (inView && !triggered) {
      timeout = setTimeout(() => {
        setTriggered(true);
      }, 100); // Delay 100ms để chắc chắn animation được kích hoạt
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [inView, triggered]);

  return (
    <Box borderBottom={1} borderColor="neutral.900" pb={3} mb={{ lg: 35 }}>
      <Typography
        variant="h1"
        align="center"
        sx={{
          my: 5,
          fontSize: "4rem",
          background: "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          wordWrap: "break-word",
        }}
      >
        Introduce
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9} md={6}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={triggered ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", lg: "flex-start" }}
            >
              <Typography
                variant="h1"
                sx={{
                  pb: 3,
                  fontSize: {
                    xs: "2.5rem", // Giảm từ 2rem xuống 1.5rem cho xs
                    sm: "3.5rem", // Giảm từ 3rem xuống 2.5rem cho sm
                    md: "4.5rem", // Giảm từ 4rem xuống 3.5rem cho md
                    lg: "5rem", // Giảm từ 6rem xuống 5rem cho lg
                  },
                  fontWeight: "light",
                  mt: { lg: 3 },
                  wordWrap: "break-word",
                  fontFamily: "Montserrat, sans-serif",
                  background:
                    "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)", // Sử dụng các màu sáng và tăng độ tương phản
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hi, I'm Tiền
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  background:
                    "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)", // Sử dụng các màu sáng và tăng độ tương phản
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",

                  fontSize: {
                    xs: "1rem", // sm
                    sm: "1.25rem", // md
                    md: "1.5rem", // lg
                  },
                  wordWrap: "break-word", // Ensure text wraps to avoid overflow
                }}
              >
                FRONTEND STACK DEVELOPMENT
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  my: 2,
                  maxWidth: "xl",
                  py: 6,
                  fontWeight: "light",
                  wordWrap: "break-word",
                  fontSize: {
                    xs: "1rem", // sm
                    sm: "1.25rem", // md
                    md: "1.5rem", // lg
                  },
                  color: textColor,
                }}
              >
                {HERO_CONTENT}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={5}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <motion.div
            ref={ref}
            initial="hidden"
            animate={triggered ? "visible" : "hidden"}
            variants={containerVariants}
            sx={{ mb: { xs: 2, md: 0 } }}
          >
            <img
              src={profilePic}
              alt="profile_img"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "20px" }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

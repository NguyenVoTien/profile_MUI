import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AboutPic from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { useInView } from "react-intersection-observer";

// Define the variants for animation
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = ({ textColor }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Kích hoạt chỉ 1 lần khi vào view port
    threshold: 0.1, // Ngưỡng xem bao nhiêu phần trăm phần tử trong view port để kích hoạt
  });

  // Dùng useRef để lưu giữ giá trị của inView trước đó
  const prevInView = useRef(false);

  // Thiết lập giá trị ban đầu cho prevInView khi component được render
  useEffect(() => {
    prevInView.current = inView;
  }, []);

  // Xử lý khi inView thay đổi
  useEffect(() => {
    if (inView && !prevInView.current) {
      setTriggerAnimation(true);
    }
    prevInView.current = inView;
  }, [inView]);

  return (
    <Box borderBottom={1} borderColor="neutral.900" pb={6}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={triggerAnimation ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        variants={variants}
      >
        <Typography
          variant="h3"
          align="center"
          my={5}
          sx={{
            fontWeight: "light",
            fontFamily: "Montserrat, sans-serif",
            background: "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About
          <Typography
            variant="h3"
            display="inline"
            color="textSecondary"
            style={{ marginLeft: "0.5rem" }}
          >
            Me
          </Typography>
        </Typography>
      </motion.div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} p={{ lg: 2 }}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={triggerAnimation ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={variants}
          >
            <Box display="flex" justifyContent="center">
              <img
                src={AboutPic}
                alt="about"
                style={{ borderRadius: "20px", width: "100%", height: "auto" }}
              />
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={triggerAnimation ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={variants}
          >
            <Box
              display="flex"
              justifyContent={{ xs: "center", lg: "flex-start" }}
            >
              <Typography
                variant="h6"
                py={5}
                maxWidth="xl"
                sx={{
                  my: 0,
                  maxWidth: "xl",
                  py: 0.5,
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
                {ABOUT_TEXT}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

import { Box, Typography, Grid, Chip, useTheme } from "@mui/material";
import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Experience = ({ textColor }) => {
  const theme = useTheme();
  const [animateElements, setAnimateElements] = useState(false);
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false, // Trigger every time it comes into view
    threshold: 0.2,
  });

  useEffect(() => {
    if (titleInView) {
      // Set a timeout to delay setting titleInView to false
      const timeoutId = setTimeout(() => {
        setAnimateElements(true);
      }, 200); // Adjust as needed

      return () => clearTimeout(timeoutId);
    }
  }, [titleInView]);

  return (
    <Box borderBottom={1} borderColor="neutral.900" pb={4}>
      <Typography
        variant="h1"
        align="center"
        sx={{
          my: 20,
          fontSize: "4rem",
          background: "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          wordWrap: "break-word",
        }}
        ref={titleRef}
      >
        Experience
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {EXPERIENCES.map((experience, index) => (
          <Grid item xs={12} lg={8} key={index} sx={{ mb: 8 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={3}>
                <motion.div
                  initial="hidden"
                  animate={animateElements ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2, color: textColor }}>
                    {experience.year}
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} lg={9}>
                <motion.div
                  initial="hidden"
                  animate={animateElements ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ mb: 1, fontWeight: "bold", color: textColor }}
                  >
                    {experience.role} -{" "}
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: textColor }}
                    >
                      {experience.company}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: textColor }}>
                    {experience.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", mt: -2 }}>
                    {experience.technologies.map((technology, chipIndex) => (
                      <motion.div
                        key={chipIndex}
                        initial="hidden"
                        animate={animateElements ? "visible" : "hidden"}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + chipIndex * 0.1,
                        }}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                      >
                        <Chip
                          label={technology}
                          variant="outlined"
                          size="small"
                          sx={{
                            mr: 2,
                            mt: 2,
                            px: 2,
                            py: 1,
                            borderRadius: 0, // Set borderRadius to 0 for square border
                            bgcolor: "transparent", // Use default background color from theme
                            border: `2px solid ${theme.palette.text.primary}`, // Border color same as background
                            color: "purple.800",
                            "&:hover": {
                              bgcolor: theme.palette.background.default, // Hover background color
                              border: `2px solid ${theme.palette.background.default}`, // Hover border color
                            },
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;

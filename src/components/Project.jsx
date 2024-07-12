//* LIB
import { Box, Typography, Grid, Chip, useTheme, Avatar } from "@mui/material";
import { PROJECTS } from "../constants/index";
import { Fade } from "react-reveal"; // Import Fade from react-reveal

const Project = ({ textColor }) => {
  const theme = useTheme();

  return (
    <Box borderBottom={1} borderColor="neutral.900" pb={4}>
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
        Projects
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {PROJECTS.map((project, index) => (
          <Grid item xs={12} lg={8} key={index} sx={{ mb: 8 }}>
            <Fade bottom>
              {" "}
              {/* Apply Fade animation */}
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} lg={3}>
                  <Avatar
                    src={project.image}
                    alt={project.title}
                    sx={{ width: 150, height: 150, borderRadius: "20px" }}
                  />
                </Grid>
                <Grid item xs={12} lg={9}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: "bold", color: textColor }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, color: textColor }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        variant="outlined"
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          borderRadius: 0,
                          bgcolor: "transparent", // Use default background color from theme
                          border: `2px solid ${theme.palette.text.primary}`, // Border color same as background
                          color: "purple.800",
                          "&:hover": {
                            bgcolor: theme.palette.background.default, // Hover background color
                            border: `2px solid ${theme.palette.background.default}`, // Hover border color
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;

import { Box, Typography, Link } from "@mui/material";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <Box borderBottom={1} borderColor="neutral.900" pb={5}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          my: 5,
          background: "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",

          wordWrap: "break-word",
        }}
      >
        Get In Touch
      </Typography>
      <Box textAlign="center" sx={{ letterSpacing: "tighter" }}>
        <Typography
          variant="body1"
          sx={{
            my: 2,
            background: "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            wordWrap: "break-word",
          }}
        >
          {CONTACT.address}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            my: 2,
            background: "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            wordWrap: "break-word",
          }}
        >
          {CONTACT.phoneNo}
        </Typography>
        <Link
          href={`mailto:${CONTACT.email}`}
          sx={{
            borderBottom: 1,
            background: "linear-gradient(to right, #ff7e78, #48588f, #b14dfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            wordWrap: "break-word",
          }}
        >
          {CONTACT.email}
        </Link>
      </Box>
    </Box>
  );
};

export default Contact;

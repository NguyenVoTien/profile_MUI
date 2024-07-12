//*LIB
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaPhp, FaWordpress } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { SiCss3, SiHtml5, SiMysql } from "react-icons/si";

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.2 }, // Animation khi hover
};

const Technologies = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  // Dùng useRef để lưu giữ giá trị của inView trước đó
  const [ref, inView] = useInView({
    triggerOnce: true, // Kích hoạt chỉ 1 lần khi vào view port
    threshold: 0.1, // Ngưỡng xem bao nhiêu phần trăm phần tử trong view port để kích hoạt
  });

  // Xử lý khi inView thay đổi
  React.useEffect(() => {
    if (inView) {
      setTriggerAnimation(true);
    }
  }, [inView]);

  return (
    <Box borderBottom={1} borderColor="neutral.800" pb={6}>
      <Typography
        variant="h4"
        align="center"
        my={5}
        sx={{
          my: 5,
          fontSize: "4rem",
          background: "linear-gradient(to right, #fca5a5, #64748b, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          wordWrap: "break-word",
        }}
      >
        Technologies
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {[
          { icon: RiReactjsLine, color: "#00bcd4" },
          { icon: TbBrandNextjs, color: "" },
          { icon: DiRedis, color: "#d32f2f" },
          { icon: FaNodeJs, color: "#4caf50" },
          { icon: BiLogoPostgresql, color: "#0288d1" },
          { icon: SiMysql, color: "#00758f" }, // MySQL icon with its brand color
          { icon: FaPhp, color: "#777bb4" }, // PHP icon with its brand color
          { icon: FaWordpress, color: "#21759b" }, // WordPress icon with its brand color
          { icon: SiHtml5, color: "#e34f26" }, // HTML icon with its brand color
          { icon: SiCss3, color: "#1572b6" }, // CSS icon with its brand color
        ].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Grid item key={index}>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={triggerAnimation ? "visible" : "hidden"}
                whileHover="hover" // Thêm dòng này
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={variants}
              >
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: 2,
                    border: 2,
                    borderColor: "neutral.800",
                    p: 2,
                    backgroundColor: "transparent",
                  }}
                >
                  <IconComponent
                    style={{ fontSize: "3rem", color: item.color }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Technologies;

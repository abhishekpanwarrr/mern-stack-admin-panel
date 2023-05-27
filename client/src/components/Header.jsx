import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.secondary[100],
          fontWeight: "bold",
          mb: "5px",
        }}
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: theme.palette.secondary[300] }}>
        {subTitle}
      </Typography>
    </Box>
  );
  return <div>Header</div>;
};

export default Header;

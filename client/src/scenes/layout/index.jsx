import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUsersQuery } from "state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const userId = useSelector((state) => state.global.userId)
   const {data} = useGetUsersQuery(userId);
   console.log("🚀 ~ file: index.jsx:14 ~ Layout ~ data:", data)
   
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
      user={data || {}}
      isNonMobile={isNonMobile}
      drawerWidth="250px"
      isSideBarOpen={isSideBarOpen}
      setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box flexGrow={1}>
        <Navbar user={data || {}} setIsSideBarOpen={setIsSideBarOpen} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

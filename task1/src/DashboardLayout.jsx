import Sidebar from "./components/dashboard/Sidebar";
import Navbar from "./components/dashboard/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md")); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);

 
  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  return (
    <Box display="flex">
      {isSidebarOpen && <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />}
      <Box flexGrow={1}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Box p={2}>{children}</Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout;

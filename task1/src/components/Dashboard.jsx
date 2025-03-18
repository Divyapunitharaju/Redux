import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, useMediaQuery } from "@mui/material";
import Sidebar from "./dashboard/Sidebar";
import Navbar from "./dashboard/Navbar";
import Cards from "./dashboard/Cards";
import ProductsTable from "./dashboard/ProductsTable";
import SalesChart from "./dashboard/SalesChart";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md")); 

  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);

  
  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  return (
    <Box display="flex">
      {isSidebarOpen && <Sidebar open={isSidebarOpen} />}
      <Box flexGrow={1}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ padding: 2, boxShadow: "none", border: "none" }}>
              <Cards />
              <ProductsTable /> 
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ boxShadow: "none", border: "none" }}>
              <SalesChart />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

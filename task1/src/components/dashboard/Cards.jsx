import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const stats = [
  { title: "New Leads", value: "3050", icon: <PeopleIcon sx={{ fontSize: 30, color: "#64a5f7" }} /> },
  { title: "This Week Sales", value: "$80,500", icon: <AttachMoneyIcon sx={{ fontSize: 30, color: "#64a5f7" }} /> },
  { title: "Inventory Status", value: "8.5% Stock Surplus", icon: <StorefrontIcon sx={{ fontSize: 30, color: "#64a5f7" }} /> },
  { title: "Orders to Deliver", value: "305 Orders", icon: <ShoppingCartIcon sx={{ fontSize: 30, color: "#64a5f7" }} /> },
];

const Cards = () => {
  return (
    <Grid container spacing={3} mb={2}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {stat.icon}
                <Box ml={2}>
                  <Typography variant="body2" color="textSecondary" sx={{ fontSize: "10px" }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "10px", color: "#1f2937" }}>
                    {stat.value}
                  </Typography>
                </Box>
              </Box>
              
              <ArrowForwardIosIcon sx={{ fontSize: 14, color: "#b0b0b0" }} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Cards;

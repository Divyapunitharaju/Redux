import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Switch,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom"; 

const Sidebar = ({ open }) => {
  const navigate = useNavigate(); 

  return (
    <Drawer
      variant={open ? "permanent" : "temporary"}
      open={open}
      sx={{
        width: open ? 220 : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 220 : 0,
          backgroundColor: "#111827",
          color: "white",
          borderRight: "none",
          transition: "width 0.3s ease-in-out",
        },
      }}
    >
      <List sx={{ px: 2, py: 1 }}>
        <ListItem
          sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "13px", color: "white" }}
          >
            Mequals
          </Typography>
          <Switch size="small" sx={{ color: "white" }} />
        </ListItem>

        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)", my: 1 }} />

        
        <ListItem
          button
          onClick={() => navigate("/dashboard")}
          sx={{
            backgroundColor: "#1f2937",
            borderRadius: 1,
            "&:hover": { backgroundColor: "#374151" },
            mb: 3,
          }}
        >
          <ListItemIcon sx={{ color: "white", minWidth: "32px" }}>
            <DashboardIcon sx={{ fontSize: "16px" }} />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
           
          />
        </ListItem>

        
        <ListItem
          button
          onClick={() => navigate("/dashboard/product")}
          sx={{
            backgroundColor: "#1f2937",
            borderRadius: 1,
            "&:hover": { backgroundColor: "#374151" },
          }}
        >
          <ListItemIcon sx={{ color: "white", minWidth: "32px" }}>
           
          </ListItemIcon>
          <ListItemText
            primary="Product"
            
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

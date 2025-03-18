import { Card, CardContent, Typography, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 50, label: "Google", color: "#0A3D91" },
  { id: 1, value: 30, label: "Facebook", color: "#1877F2" },
  { id: 2, value: 20, label: "Others", color: "#5A9BEF" },
];

const SalesChart = () => {
  return (
    <Card >
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" sx={{fontSize:"12px"}}>
          Traffic Sources <Typography variant="caption" sx={{fontSize:"10px"}}>Last 30 days</Typography>
        </Typography>
        <PieChart
           series={[{ data, innerRadius: 50, outerRadius: 80 }]}
          width={300}
          height={200}
        />
        <Box display="flex" justifyContent="center" gap={3} mt={1}>
          {data.map((item) => (
            <Box key={item.id} display="flex" alignItems="center" gap={1}>
              <Box
                sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: item.color }}
              />
              <Typography variant="body2" sx={{ fontSize: "10px" }}>{item.label}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default SalesChart

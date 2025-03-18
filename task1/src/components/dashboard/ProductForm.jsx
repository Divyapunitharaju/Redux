import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Breadcrumbs,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Link } from "react-router-dom";

const ProductForm = () => {
  const [productType, setProductType] = useState("product");
  const [date, setDate] = useState(null);
  const [unit, setUnit] = useState("pieces");
  const [gst, setGst] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [nos, setNos] = useState("");

  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Product title is required!";
    if (!price) newErrors.price = "Product price is required!";
    else if (price <= 0) newErrors.price = "Price must be greater than zero!";

    if (nos && nos < 0) newErrors.nos = "No's must be a positive number!";
    if (!gst) newErrors.gst = "Please select a GST percentage!";
    if (!date) newErrors.date = "Please select a valid date!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newProduct = {
        productType,
        title,
        price,
        nos,
        unit,
        gst,
        date: date ? date.format("MM/DD/YYYY") : "",
      };

      setProducts([...products, newProduct]);

      setTitle("");
      setPrice("");
      setNos("");
      setGst("");
      setDate(null);
    }
  };

  return (
    <Container maxWidth="md">
      <Breadcrumbs aria-label="breadcrumb">
        <Box display="flex" alignItems="center">
          <Typography variant="h6" color="textPrimary">
            Product |
          </Typography>
          <Link
            to="/dashboard"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <HomeIcon
              style={{ marginLeft: "5px", color: "#2196F3", cursor: "pointer" }}
            />
          </Link>
        </Box>
      </Breadcrumbs>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel sx={{ fontSize: "14px" }}>Type</FormLabel>
              <RadioGroup
                row
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              >
                <FormControlLabel
                  value="product"
                  control={<Radio />}
                  label="Product"
                  sx={{ fontSize: "14px" }}
                />
                <FormControlLabel
                  value="service"
                  control={<Radio />}
                  label="Service"
                  sx={{ fontSize: "14px" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Product Title"
              sx={{ "& input": { fontSize: "14px" } }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={!!errors.title}
              helperText={errors.title}
              FormHelperTextProps={{ sx: { fontSize: "8px" } }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Product Price"
              type="number"
              sx={{ "& input": { fontSize: "14px" } }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              error={!!errors.price}
              helperText={errors.price}
              FormHelperTextProps={{ sx: { fontSize: "8px" } }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="No's"
              type="number"
              sx={{ "& input": { fontSize: "14px" } }}
              value={nos}
              onChange={(e) => setNos(e.target.value)}
              error={!!errors.nos}
              helperText={errors.nos}
              FormHelperTextProps={{ sx: { fontSize: "8px" } }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <FormLabel sx={{ fontSize: "14px" }}>Units</FormLabel>
              <RadioGroup
                row
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <FormControlLabel
                  value="pieces"
                  control={<Radio />}
                  label="Pieces"
                  sx={{ fontSize: "14px" }}
                />
                <FormControlLabel
                  value="kilograms"
                  control={<Radio />}
                  label="Kilograms"
                  sx={{ fontSize: "14px" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth error={!!errors.gst}>
              <InputLabel sx={{ fontSize: "14px" }}>GST %</InputLabel>

              <Select
                value={gst}
                onChange={(e) => setGst(e.target.value)}
                sx={{ fontSize: "14px" }}
              >
                <MenuItem value={5}>5%</MenuItem>
                <MenuItem value={12}>12%</MenuItem>
                <MenuItem value={18}>18%</MenuItem>
                <MenuItem value={28}>28%</MenuItem>
              </Select>
              <FormHelperText sx={{ fontSize: "8px" }}>
                {errors.gst}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date"
                inputFormat="MM/DD/YYYY"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    sx={{ "& input": { fontSize: "14px" } }}
                    error={!!errors.date}
                    helperText={errors.date}
                    FormHelperTextProps={{ sx: { fontSize: "8px" } }}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      {products.length > 0 && (
        <Container maxWidth="md" sx={{ marginTop: "20px" }}>
          <Card sx={{ marginBottom: "10px" }}>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      Title
                    </TableCell>
                    <TableCell sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      Type
                    </TableCell>
                    <TableCell sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      Price
                    </TableCell>
                    <TableCell sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      No's
                    </TableCell>
                    <TableCell sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      Units
                    </TableCell>
                    <TableCell sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      GST
                    </TableCell>
                    <TableCell sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ fontSize: "14px" }}>
                        {product.title}
                      </TableCell>
                      <TableCell sx={{ fontSize: "14px" }}>
                        {product.productType}
                      </TableCell>
                      <TableCell sx={{ fontSize: "14px" }}>
                        ₹{product.price}
                      </TableCell>
                      <TableCell sx={{ fontSize: "14px" }}>
                        {product.nos || "N/A"}
                      </TableCell>
                      <TableCell sx={{ fontSize: "14px" }}>
                        {product.unit}
                      </TableCell>
                      <TableCell sx={{ fontSize: "14px" }}>
                        {product.gst}%
                      </TableCell>
                      <TableCell sx={{ fontSize: "14px" }}>
                        {product.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Container>
      )}
    </Container>
  );
};

export default ProductForm;

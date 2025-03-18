import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsFromAPI } from "../productlist/remote";
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from "../productlist/actions";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchProductsRequest())
      try {
        const data = await fetchProductsFromAPI()
        dispatch(fetchProductsSuccess(data))
        console.log(data);
      } catch (error) {
        dispatch(fetchProductsFailure(error.message))
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "10px", fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontSize: "10px", fontWeight: "bold" }}>Revenue</TableCell>
            <TableCell sx={{ fontSize: "10px", fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={product.image} alt={product.title} sx={{ width: 30, height: 30, marginRight: 1 }} />
                  <span style={{ fontSize: "10px" }}>{product.title}</span>
                </Box>
              </TableCell>
              <TableCell sx={{ fontSize: "10px" }}>${product.price}</TableCell>
              <TableCell>
                <EditIcon color="primary" style={{ cursor: "pointer", fontSize: "10px" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

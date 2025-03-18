import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import signup from "../assets/signup.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required!";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.terms)
      newErrors.terms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Registration successful! Redirecting to login...");
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgb(4, 4, 23)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            p: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 2,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 2, sm: 0 },
              }}
            >
              <img
                src={signup}
                alt="Signup"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  borderRadius: "6px",
                  objectFit: "cover",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  error={!!errors.username}
                  helperText={errors.username}
                  InputProps={{ sx: { fontSize: "0.875rem" } }}
                  InputLabelProps={{ sx: { fontSize: "0.875rem" } }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{ sx: { fontSize: "0.875rem" } }}
                  InputLabelProps={{ sx: { fontSize: "0.875rem" } }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{ sx: { fontSize: "0.875rem" } }}
                  InputLabelProps={{ sx: { fontSize: "0.875rem" } }}
                  sx={{ mb: 2 }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "0.875rem" }}>
                      I agree to the terms and conditions
                    </Typography>
                  }
                />
                {errors.terms && (
                  <Typography
                    sx={{ fontSize: "0.75rem", color: "error.main", mt: 1 }}
                  >
                    {errors.terms}
                  </Typography>
                )}

                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        backgroundColor: "#1976D2",
                        "&:hover": { backgroundColor: "#1558B0" },
                        fontSize: "0.875rem",
                        padding: "10px ",
                        mt: 2,
                      }}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </form>

              <Typography
                variant="body2"
                sx={{ mt: 2, fontSize: "0.875rem", textAlign: "center" }}
              >
                Already have an account?{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "#1976D2",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                  }}
                  onClick={() => navigate("/")}
                >
                  Login
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;

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
  CircularProgress,
} from "@mui/material";
import login from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });

    
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format";

    if (!formData.password) tempErrors.password = "Password is required!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      setTimeout(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (
          storedUser &&
          storedUser.email === formData.email &&
          storedUser.password === formData.password
        ) {
          alert("Login successful!");
          navigate("/dashboard");
        } else {
          alert("Invalid email or password!");
          setLoading(false);
        }
      }, 2000);
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
                src={login}
                alt="Login"
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

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "0.875rem" }}>
                        Remember Me
                      </Typography>
                    }
                  />
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ cursor: "pointer", fontSize: "0.875rem" }}
                    onClick={() => navigate("/forget-password")}
                  >
                    Forgot password?
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  type="submit"
                  
                  sx={{
                    backgroundColor: "#1976D2",
                    "&:hover": { backgroundColor: "#1558B0" },
                    fontSize: "0.875rem",
                    padding: "10px 0",
                  }}
                >
                  {loading ? (
                    <CircularProgress size={20} sx={{ color: "#fff" }} />
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>

              <Typography
                variant="body2"
                sx={{ mt: 2, fontSize: "0.875rem", textAlign: "center" }}
              >
                Don't have an account?{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "#1976D2",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Register
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;

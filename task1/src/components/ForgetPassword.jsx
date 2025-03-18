import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png";
import { TextField, Button, Box, Paper } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPasswordField, setShowPasswordField] = useState(false);

  const handleChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setNewPassword(e.target.value);

  const handleSubmit = () => {
    if (!email) {
      toast.error("Email is required!", { theme: "colored" });
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format!", { theme: "colored" });
    } else {
      setShowPasswordField(true);
    }
  };

  const handleResetPassword = () => {
    if (!newPassword) {
      toast.error("Password cannot be empty!", { theme: "colored" });
    } else if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters!", {
        theme: "colored",
      });
    } else {
      toast.success("Password has been successfully reset!", {
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(4, 4, 23)",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "90%",
          maxWidth: "400px",
          padding: 2,
          borderRadius: "12px",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <ToastContainer position="top-right" autoClose={3000} />

        <img
          src={login}
          alt="Reset Password"
          style={{ width: "50%", borderRadius: "8px", marginBottom: "10px" }}
        />

        {!showPasswordField ? (
          <>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={handleChange}
              InputProps={{ style: { fontSize: '1rem' } }} 
              InputLabelProps={{ style: { fontSize: '1rem' } }} 
              sx={{ mb: 1 }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#2563eb",
                "&:hover": { backgroundColor: "#1d4ed8" },
                fontSize: "1rem", 
                padding: "8px 16px",
                mb: 1,
              }}
              onClick={handleSubmit}
            >
              Reset Password
            </Button>
          </>
        ) : (
          <>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              variant="outlined"
              name="password"
              value={newPassword}
              onChange={handlePasswordChange}
              InputProps={{ style: { fontSize: '1rem' } }} 
              InputLabelProps={{ style: { fontSize: '1rem' } }} 
              sx={{ mb: 1 }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#2563eb",
                "&:hover": { backgroundColor: "#1d4ed8" },
                fontSize: "1rem", 
                padding: "8px 16px",
                mb: 1,
              }}
              onClick={handleResetPassword}
            >
              Set New Password
            </Button>
          </>
        )}

        <Button
          fullWidth
          variant="outlined"
          sx={{ fontSize: "1rem", padding: "8px 16px" }} 
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
      </Paper>
    </Box>
  );
};

export default ForgetPassword;

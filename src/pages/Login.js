import { AccountCircle, Close, LockPerson } from "@mui/icons-material/";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from "../components/Loading";
import Logo from '../components/Logo';
import LogoInverse from "../components/LogoInverse";
import { GlobalContext } from "../context/GlobalState";


const Login = () => {
  const { userLoggedIn, user, error, loading, userLogin, isDarkTheme } = useContext(GlobalContext);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (userLoggedIn) {
        navigate("/home");
    }
  }, [userLoggedIn, user, error]);

  const handleLogin = (e) => {
    e.preventDefault();
    userLogin(username, password)
  };

  return loading ? (
    <Loading />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "2rem", margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0",
            width: "400px",
          }}
        >
          <Logo width="400px" fill={isDarkTheme ? "#fff" : "#020403"} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ padding: "30px" }}
            color="primary"
          >
            Demo App
          </Typography>
        </Box>

        <form onSubmit={handleLogin}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="username"
              label="Username"
              variant="standard"
              value={username}
              sx={{ width: "100%" }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              margin: "30px 0",
            }}
          >
            <LockPerson sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="password"
              type="password"
              className="login-field"
              label="Password"
              variant="standard"
              value={password}
              sx={{ width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          {error ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                margin: "30px 0 60px",
              }}
            >
              <Close color="error" />
              <Typography
                color="error"
                variant="p"
                component="div"
                textAlign="center"
                sx={{
                  flexGrow: 1,
                  fontFamily: "sans-serif",
                }}
              >
                Incorrect login credentials, please try again
              </Typography>
            </Box>
          ) : (
            <></>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "50px 0 20px 0",
            }}
          >
            <Button size="large" type="submit" variant="contained">
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default Login
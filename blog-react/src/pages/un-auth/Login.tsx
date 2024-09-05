import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { memo, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Container from "@mui/material/Container";
import { Box, Button, Grid, TextField } from "@mui/material";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API_REQUESTS } from "../../common/apiRequests";
import { httpService } from "../../services/httpService";
import toastMessage from "../../hooks/Toast";

const Login = () => {
  const navigate = useNavigate();
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = (error: any) => {
    console.log(error);
  };

  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState<any>({
    isError: false,
    message: "",
    alertType: "",
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  const login = async (data: any) => {
    API_REQUESTS.USER_LOGIN.PAYLOAD = data;
    // console.log(API_REQUESTS.USER_LOGIN)
    try {
      const request = await httpService(API_REQUESTS.USER_LOGIN);
      console.log(request)
    //   dispatch(accessToken(request));
      setError({
        isError: true,
        message: "Login successful!",
        alertType: "success",
      });
      toastMessage('Login successful!', 'success');
    } catch (error) {
      console.log(error)
      toastMessage('User not existed.', 'error');
    }
  };

  // const loginWithGoogle = useGoogleLogin({
  //   onSuccess: async ({ code }) => {
  //     API_REQUESTS.SOCIAL_LOGIN.PAYLOAD = { code };
  //     try {
  //       const request = await httpService(API_REQUESTS.SOCIAL_LOGIN);
  //       // dispatch(accessToken(request));
  //       setError({
  //         isError: true,
  //         message: "Login successful!",
  //         alertType: "success",
  //       });
  //     } catch (error) {
  //       setError({
  //         isError: true,
  //         message: "Forbidden: You do not have access.",
  //         alertType: "error",
  //       });
  //     }
  //   },
  //   flow: "auth-code",
  //   onError: (error) => console.log("Login Failed:", error),
  // });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    // router.push("/sign-up");
  };

  return (
    <>
      {/* {error.isError && (
        <SnackbarMsg
          open={error.isError}
          message={error.message}
          alertType={error.alertType}
        />
      )} */}
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item md={6}>
          <Box marginTop={"10%"}>
            <Card>
              <CardContent>
                <form onSubmit={onSubmit}>
                  <TextField
                    required
                    id="outlined-required"
                    label="email"
                    defaultValue=""
                    fullWidth
                    margin="normal"
                    type="email"
                    helperText="Please enter email"
                    {...register("email", { required: true, min: 3, max: 15 })}
                  />
                  <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    margin="normal"
                    helperText="Please enter password"
                    {...register("password", {
                      required: true,
                      min: 3,
                      max: 10,
                    })}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    fullWidth={true}
                    startIcon={<VpnKeyOutlinedIcon />}
                  >
                    Login
                  </Button>
                </form>
                <Box
                  sx={{
                    marginTop: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    typography: "body1",
                    "& > :not(style) ~ :not(style)": {
                      ml: 2,
                    },
                  }}
                >
                  <Link
                    underline="always"
                    sx={{ cursor: "pointer" }}
                    onClick={handleClick}
                  >
                    Regester here..
                  </Link>
                </Box>
                <Typography align="center" variant="h6">
                  OR
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  variant="outlined"
                  color="error"
                  size="large"
                  onClick={() => {
                    //loginWithGoogle();
                  }}
                  fullWidth={true}
                  startIcon={<GoogleIcon />}
                >
                  Sign in with google
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  );
};

export default memo(Login);

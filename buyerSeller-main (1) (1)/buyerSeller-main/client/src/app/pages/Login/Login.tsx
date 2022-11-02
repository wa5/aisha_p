import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import BannerMessage from "../../banner-message/BannerMessage";
import "./Login.css";
export interface ILogin {}
export interface Iselector {
  authReducer: any;
}

const Login: React.FC<ILogin> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const loginRes = useSelector((state: any) => state["authReducer"]["login"]);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isEmptyObject: any = (selector: any) => {
    return JSON.stringify(selector) === "{}";
  };

  React.useEffect(() => {
    if (isEmptyObject(loginRes)) {
      return;
    } else {
      if (loginRes.status === "201") {
        setSeverity("success");
        setMsg("You Logged In successfully");
        setOpen(true);
        let timing = setInterval(() => {
          navigate("/listing");
        }, 5000);
        return () => {
          clearInterval(timing);
        };
      } else if (loginRes.status === "400") {
        setSeverity("error");
        setMsg("You have entered wrong password");
        setOpen(true);
        let timing = setInterval(() => {
          setIsloading(!isLoading);
          navigate("/login");
        }, 5000);
        return () => {
          clearInterval(timing);
        };
      } else if (loginRes.status === "309") {
        setSeverity("info");
        setMsg("User not registered please sign up");
        setOpen(true);
        let timing = setInterval(() => {
          setIsloading(!isLoading);
          navigate("/login");
        }, 5000);
        return () => {
          clearInterval(timing);
        };
      }
    }
  }, [loginRes]);

  const google = () => {
    window.open("http://localhost:8001/api/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:8001/api/facebook", "_self");
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  let items = { password, email };
  let handleSubmit = async () => {
    // saga dispatch
    setIsloading(!isLoading);
    dispatch({ type: "SIGN_IN_USER", payload: items });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <BannerMessage
        open={open}
        onClose={handleClose}
        severity={severity}
        msg={msg}
      />

      <Box
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 400,
            height: "auto",
            borderRadius: "16px",
          },
        }}
      >
        <Paper>
          <div className='heading'>Welcome back</div>

          <TextField
            sx={{ m: 1, width: "45ch" }}
            className='text_field'
            id='outlined-basic'
            label='Email or phone number'
            variant='outlined'
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl sx={{ m: 1, width: "45ch" }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <Link href='#' underline='hover'>
            <span className='css-1y3jyx8'> Forgot password?</span>
          </Link>

          <div className='display'>
            <LoadingButton
              variant='contained'
              loadingIndicator='Loading…'
              loading={isLoading}
              loadingPosition='center'
              onClick={handleSubmit}
              size='large'
              fullWidth={true}
            >
              {isLoading ? (
                <>
                  <span
                    style={{
                      color: "#006142",
                      fontWeight: 600,
                      height: "40px",
                    }}
                  ></span>
                </>
              ) : (
                <span style={{ color: "#006142", fontWeight: 600 }}>
                  {" "}
                  Log in
                </span>
              )}
            </LoadingButton>
          </div>
          <Divider textAlign='center' className='m_or' sx={{ marginTop: 2 }}>
            <span style={{ color: "#666666" }}>OR</span>
          </Divider>
          <div className='display'>
            <Button className='google_btn google_btn_M' onClick={google}>
              <img
                src='https://d19rpgkrjeba2z.cloudfront.net/static/gen/6831d67e79a8b0aa55cb.svg'
                alt='google'
                height='20'
                width='20'
              />
              <div className='third-party-provider-label'>
                <span style={{ color: "#000", fontWeight: "600" }}>
                  Continue With Google
                </span>
              </div>
            </Button>
          </div>
          <div className='display'>
            <Button className='google_btn google_btn_F' onClick={facebook}>
              <img
                src='https://d19rpgkrjeba2z.cloudfront.net/static/gen/1b50753b8452580def5c.svg'
                alt='google'
                height='20'
                width='20'
              />
              <div
                className='third-party-provider-label'
                style={{ color: "#000", fontWeight: "600" }}
              >
                Continue With Facebook
              </div>
            </Button>
          </div>
          <div className='display'>
            <Button className='google_btn google_btn_A' onClick={github}>
              <img
                src='https://d19rpgkrjeba2z.cloudfront.net/static/gen/ac8579fdc87804afe253.svg'
                alt='google'
                height='20'
                width='20'
              />
              <div
                className='third-party-provider-label'
                style={{ color: "#000", fontWeight: "600" }}
              >
                Continue With Apple
              </div>
            </Button>
          </div>
          <div className='NEXT_LINK'>
            <span className='next'>Don't have a account? &nbsp;</span>
            <Link href='/roles' underline='hover'>
              <span className='next'>SignUp?</span>
            </Link>
          </div>
        </Paper>
      </Box>
    </>
  );
};

export default Login;

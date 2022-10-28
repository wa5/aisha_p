import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
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
import "./Login.css";
export interface ILogin {}
export interface Iselector {
  authReducer: any;
}

const Login: React.FC<ILogin> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginRes = useSelector((state: any) => state["authReducer"]["login"]);
  // console.log("selector>>>", loginRes);

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
        alert("u registred");
        navigate("/dashboard");
      } else if (loginRes.status === "400") {
        alert("wrong password");
        console.log(loginRes);
        navigate("/login");
      } else if (loginRes.status === "309") {
        alert("user not registred try again");
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
    dispatch({ type: "SIGN_IN_USER", payload: items });

  };
  return (
    <>
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
              // onChange={handleChange("password")}
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
          <Button
            variant='contained'
            onClick={handleSubmit}
            size='large'
            fullWidth={true}
          >
            <span style={{ color: "#006142", fontWeight: 600 }}> Log in</span>
          </Button>
          <Divider textAlign='center' className='m_or'>
            <span style={{ color: "#666666" }}>OR</span>
          </Divider>
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

          <Button className='google_btn' onClick={github}>
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

          <div className='NEXT_LINK'>
            <span className='next'>Don't have a account? </span>
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

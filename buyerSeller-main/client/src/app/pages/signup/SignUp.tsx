import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Register from "../Register/Register";
import "./Signup.css";

export interface ISignUp {}

const SignUp: React.FC<ISignUp> = (props) => {
  const navigate = useNavigate();

  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');

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

  const google = () => {
    window.open("http://localhost:8001/api/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:8001/api/facebook", "_self");
  };
const handleContinue=()=>{
  
  navigate("/register",{state:{password:password,email:email}})
}
  return (
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
      <Paper elevation={0}>
        <div className='heading'>Sign up</div>

        <div className='subHead'>Email address</div>
        <TextField
          sx={{ m: 1, width: "45ch" }}
          className='text_field'
          id='outlined-basic'
          variant='outlined'
          onChange={(e)=>setEmail(e.target.value)}
        />

        <div className='subHead'>Password</div>
        <FormControl sx={{ m: 1, width: "45ch" }} variant='outlined'>
          <OutlinedInput
            id='outlined-adornment-password'
            type={values.showPassword ? "text" : "password"}
            value={password}
            // onChange={handleChange("password")}
            onChange={(e)=>setPassword(e.target.value)}
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
          />
        </FormControl>

        <Button
          variant='contained'
          size='large'
          fullWidth={true}
          onClick={handleContinue}
        >
          <span style={{color:"#006142",fontWeight:600}}> Continue</span>
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
        {/* className='NEXT_LINK' */}

        <p style={{marginTop:10}}>
        By signing up, you agree to our{" "}
          <Link href='#' underline='hover'>
            Privacy Policy
          </Link>
          ,{" "}
          <Link href='#' underline='hover'>
            Cookie Policy
          </Link>
          ,{" "}
          <Link href='#' underline='hover'>
            Member Agreement
          </Link>
          , and that we may share your personal information with our
          
          <Link href='#' underline='hover'>
            {" "}
            partners{" "}
          </Link>
          to verify your account.
        </p>
      </Paper>
    </Box>
  );
};

export default SignUp;

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useLocation, useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import "./Register.css";
import { useDispatch,useSelector } from "react-redux";

export interface IRegister {}

const Register: React.FC<IRegister> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const registerRes = useSelector((state: any) => state["registerReducer"]["register"])

  const isEmptyObject: any = (selector: any) => {
    return JSON.stringify(selector) === "{}";
  };

  React.useEffect(() => {
    if (isEmptyObject(registerRes)) {
      return;
    } else {
      if (registerRes.status === "201") {
        alert("u registred");
        navigate("/dashboard");
      } else if (registerRes.status === "400") {
        alert("wrong password");
        console.log(registerRes);
        navigate("/login");
      } else if (registerRes.status === "309") {
        alert("user not registred try again");
      }
    }
  }, [registerRes]);
  // console.log("mail>>>", location);

  var [fname, setFname] = React.useState("");
  var [lname, setLname] = React.useState("");
  var [email, setEmail] = React.useState(location.state.email);
  var [password, setPassword] = React.useState(location.state.password);
  var [dob, setDob] = React.useState("");
  var [phonno, setPhonno] = React.useState("");
  let items = { fname, lname, phonno, password, dob, email };

  let handleSubmit = async (e: any) => {
     e.preventDefault();
    // saga dispatch
    dispatch({ type: "REGISTER_USER", payload: items });
  
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
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleDateChange = (newValue: any) => {
    // setValue(newValue);
    setDob(newValue);
  };

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
        <div className='heading'>Register</div>

        <div className='subHead'>First Name</div>
        <TextField
          sx={{ m: 1, width: "45ch" }}
          onChange={(e) => setFname(e.target.value)}
          className='text_field'
          id='outlined-basic'
          variant='outlined'
        />

        <div className='subHead'>Last Name</div>
        <TextField
          sx={{ m: 1, width: "45ch" }}
          onChange={(e) => setLname(e.target.value)}
          className='text_field'
          id='outlined-basic'
          variant='outlined'
        />

        <div style={{ marginTop: 10 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label='Date desktop'
              inputFormat='MM/DD/YYYY'
              value={value}
              onChange={handleDateChange}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className='subHead'>Phone No.</div>
        <TextField
          sx={{ m: 1, width: "45ch" }}
          onChange={(e) => setPhonno(e.target.value)}
          className='text_field'
          id='outlined-basic'
          variant='outlined'
        />

        <Button
          variant='contained'
          size='large'
          fullWidth={true}
          onClick={handleSubmit}
        >
          <span style={{ color: "#006142", fontWeight: 600 }}>Register</span>
        </Button>
      </Paper>
    </Box>
  );
};

export default Register;

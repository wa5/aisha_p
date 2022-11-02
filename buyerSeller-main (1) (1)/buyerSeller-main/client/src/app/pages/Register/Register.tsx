import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLocation, useNavigate } from "react-router-dom";
import BannerMessage from "../../banner-message/BannerMessage";
import dayjs from "dayjs";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";

export interface IRegister {}

const Register: React.FC<IRegister> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const registerRes = useSelector(
    (state: any) => state["registerReducer"]["register"]
  );

  const isEmptyObject: any = (selector: any) => {
    return JSON.stringify(selector) === "{}";
  };

  React.useEffect(() => {
    if (isEmptyObject(registerRes)) {
      return;
    } else {
      if (registerRes.status === "201") {
        setSeverity("success");
        setMsg("You Registered successfully");
        setOpen(true);
        let timing = setInterval(() => {
          navigate("/listing");
        }, 5000);
        return () => {
          clearInterval(timing);
        };
      } else if (registerRes.status === "400") {
        // alert("wrong password");
        console.log(registerRes);
        setSeverity("success");
        setMsg("You have entered wrong password");
        setOpen(true);
        let timing = setInterval(() => {
          navigate("/login");
        }, 5000);
        return () => {
          clearInterval(timing);
        };
      } else if (registerRes.status === "309") {
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
  }, [registerRes]);

  var [fname, setFname] = React.useState("");
  var [lname, setLname] = React.useState("");
  var [email, setEmail] = React.useState(location.state.email);
  var [password, setPassword] = React.useState(location.state.password);
  var [dob, setDob] = React.useState("");
  var [phonno, setPhonno] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  let items = { fname, lname, phonno, password, dob, email };

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsloading(!isLoading);
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

  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleDateChange = (newValue: any) => {
    // setValue(newValue);
    setDob(newValue);
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
                Register
              </span>
            )}
          </LoadingButton>
        </Paper>
      </Box>
    </>
  );
};

export default Register;

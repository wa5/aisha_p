import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import "./Listing.css";
export interface ILogin {}
export interface Iselector {
  authReducer: any;
}

const Listing: React.FC<ILogin> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const loginRes = useSelector((state: any) => state["authReducer"]["login"]);
  // console.log("selector>>>", loginRes);

  const [itemDetails, setItemDetails] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [ItemType, setItemType] = React.useState("");
  // const [itemFromvalue, setItemFromValue] = React.useState<Dayjs | null>(null);
  // const [itemToValue, setItemToValue] = React.useState<Dayjs | null>(null);
  const [from_date,setFromDate]=React.useState('')
  const [to_date,setToDate]=React.useState('')
  const [itemPicture, setItemPicture] = React.useState({
    preview: "",
    url: "",
  });

  const handleSelectChange = (event: SelectChangeEvent) => {
    setItemType(event.target.value);
  };

  const isEmptyObject: any = (selector: any) => {
    return JSON.stringify(selector) === "{}";
  };

  // React.useEffect(() => {
  //   if (isEmptyObject(loginRes)) {
  //     return;
  //   } else {
  //     if (loginRes.status === "201") {
  //       alert("u registred Listing");
  //       dispatch(addBannerMessages({
  //         status: 'success',
  //         message: 'We have sent instructions on how to reset your password to your email address'
  //     }));
  //       navigate("/dashboard");
  //     } else if (loginRes.status === "400") {
  //       alert("wrong password");
  //       dispatch(addBannerMessages({
  //         status: 'success',
  //         message: 'We have sent instructions on how to reset your password to your email address'
  //     }));
  //       console.log(loginRes);
  //       navigate("/login");
  //     } else if (loginRes.status === "309") {
  //       alert("user not registred try again");
  //     }
  //   }
  // }, [loginRes]);


  let handleSubmit = async () => {
    // saga dispatch
    
    // alert("items")
    // console.log("items",items)
    // navigate('/listing-summary')
    
    let form = new FormData();
    form.append('img_url',itemPicture.preview,)
   form.append('name',itemDetails)
   form.append('type',ItemType)
   form.append('from_date',from_date)
   form.append('to_date',to_date)
    // alert("items")
    console.log("form>>>>>",form)
    fetch(`http://localhost:8001/api/upload-products`, {
      method: "POST",
      body: form,
    }).then(()=>{
      
    alert("Item submitted successfully")
    });;
  };

  const handleItemPicture = (e: any) => {
    setItemPicture({
      preview: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };
  console.log("itemPic", itemPicture);
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
          <div className='heading'>Listing Page</div>

          <TextField
            sx={{ m: 1, width: "45ch" }}
            className='text_field'
            id='outlined-basic'
            label='Item details'
            variant='outlined'
            onChange={(e) => setItemDetails(e.target.value)}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id='demo-select-small'>Item Type</InputLabel>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              value={ItemType}
              label='Item Type'
              autoWidth={true}
              onChange={handleSelectChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Hand Made"}>Hand Made</MenuItem>
              <MenuItem value={"Machine Made"}>Machine Made</MenuItem>
            </Select>
          </FormControl>
          <div style={{ marginTop: 10 }}>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Item Available From'
                value={itemFromvalue}
                onChange={(newValue) => {
                    setItemFromValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
            <div className="date">From Date</div>
             <TextField
            sx={{ m: 1, width: "45ch" }}
            className='text_field'
            id='outlined-basic'
            // label='From'
            variant='outlined'
            onChange={(e) => setFromDate(e.target.value)}
            type="date"
          />
          </div>
          <div style={{ marginTop: 20 }}>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='Item available to Date'
                value={itemToValue}
                onChange={(newValue) => {
                    setItemToValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
            <div className="date">To Date</div>
            <TextField
            sx={{ m: 1, width: "45ch" }}
            className='text_field'
            id='outlined-basic'
            // label='To'
            variant='outlined'
            onChange={(e) => setToDate(e.target.value)}
            type="date"
          />
          </div>
          <Stack
            direction='row'
            alignItems='center'
            spacing={20}
            sx={{ marginTop: 2 }}
          >
            <IconButton
              color='primary'
              sx={{ marginLeft: 4 }}
              aria-label='upload picture'
              component='label'
            >
              <input
                hidden
                accept='image/*'
                type='file'
                onChange={(event) => handleItemPicture(event)}
              />
              <PhotoCamera />
            </IconButton>
            <Avatar
              alt='Remy Sharp'
              src={itemPicture.url}
              sx={{ width: 150, height: 150 }}
              variant='rounded'
            />
          </Stack>
          <Button
            variant='contained'
            onClick={handleSubmit}
            size='large'
            fullWidth={true}
          >
            <span style={{ color: "#006142", fontWeight: 600 }}>Submit</span>
          </Button>
          <Link href='/total-items' underline='hover'>
            <span className='next'>List of all items</span>
          </Link>
        </Paper>
      </Box>
    </>
  );
};

export default Listing;

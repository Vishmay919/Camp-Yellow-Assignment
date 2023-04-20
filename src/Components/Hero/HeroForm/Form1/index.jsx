import {
  Box,
  Button,
  Input,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

let Form1Container = styled(Box)(({theme})=>({
  display: "flex",
  flexDirection: "column",
  height:"100%",
  justifyContent:"space-between",
  marginTop:"48px",

  [theme.breakpoints.down("md")]:{
    alignItems:"center",
    width:"100%"
  }
}));

let Btn = styled(Button)({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#007fff",
  color: "white",
  padding: "8px 24px",
  marginTop: "32px",
  width: "fit-content",
  alignSelf: "flex-end",
  ":hover": {
    backgroundColor: "#0355b0",
  },
});

let CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffffff",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#007fff",
  },
});

const Form1 = ({setPageNo,completedPage, setCompletedPage}) => {

  let NextStep = ()=>{
    setPageNo(1);
    setCompletedPage([true, completedPage[1]])
  }

  return (
    <Form1Container>
      <CustomTextField
        fullWidth
        label="Choose a name for your Game"
        variant="outlined"
      />
      <Btn onClick={NextStep}>Next</Btn>
    </Form1Container>
  );
};

export default Form1;

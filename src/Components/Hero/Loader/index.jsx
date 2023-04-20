import {
  Box,
  Button,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  marginRight: "16px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#000",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1bbc9b",
  },
}));

const LoaderContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    width:"100%",

  }
}));

const BtnContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

let BtnSuccess = styled(Button)({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#16a086",
  color: "white",
  padding: "8px 24px",
  marginTop: "32px",
  width: "fit-content",

  ":hover": {
    backgroundColor: "#1bbc9b",
  },
});

const Loader = ({ handleReset }) => {
  const [value, setValue] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      if(value<100){
        setValue((prevProgress) => ( prevProgress + 2));
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let download = ()=>{
    setValue(0);
    handleReset()
  }

  return (
    <>
      {value < 100 ? (
        <LoaderContainer>
          <BorderLinearProgress
            style={{ flex: 1 }}
            variant="determinate"
            value={value}
          />
          <Typography variant="h6">{value}%</Typography>
        </LoaderContainer>
      ) : (
        <BtnContainer>
          <Typography variant="h6" textAlign="center">
            Your Game has Compiled been Successfully!
          </Typography>
          <BtnSuccess onClick={download}>Download Game</BtnSuccess>
        </BtnContainer>
      )}
    </>
  );
};

export default Loader;

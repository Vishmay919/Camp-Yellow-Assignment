import { Box, Step, StepButton, Stepper, styled } from "@mui/material";
import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Loader from "../Loader";

let Form1Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingTop: "16px",
  paddingBottom: "8px",
  marginRight: "48px",
  height: "40vh",

  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    marginRight: "0",
  },
}));

const steps = ["Choose Game Name", "Upload Game Files"];
const HeroForm = () => {
  const [pageNo, setPageNo] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [completedPage, setCompletedPage] = useState([false, false]);

  const handleReset = () => {
    setPageNo(0);
    setCompleted(false);
    setCompletedPage(false);
  };

  return (
    <Form1Container>
      {completed ? (
        <Loader handleReset={handleReset} />
      ) : (
        <>
          <Stepper nonLinear activeStep={pageNo} sx={{ marginBottom: "36px" }}>
            {steps.map((label, index) => (
              <Step key={label} completed={completedPage[index]}>
                <StepButton color="inherit" onClick={() => setPageNo(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          {pageNo === 0 ? (
            <Form1
              setPageNo={setPageNo}
              completedPage={completedPage}
              setCompletedPage={setCompletedPage}
            />
          ) : (
            <Form2
              setPageNo={setPageNo}
              setCompleted={setCompleted}
              completedPage={completedPage}
              setCompletedPage={setCompletedPage}
            />
          )}
        </>
      )}
    </Form1Container>
  );
};

export default HeroForm;

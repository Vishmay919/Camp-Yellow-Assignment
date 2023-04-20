import { Box, Button, Grid, Input, Typography, styled } from "@mui/material";
import { useState } from "react";

const FileInput = styled(Input)({
  display: "none",
});

const UploadButton = styled(Button)({
  minWidth: "150px",
  marginRight: "8px",
  borderRadius: "24px",
});

let BtnContainer = styled(Box)({
  display: "flex",
  alignSelf: "flex-end",
  gap: "16px",
});

let Btn = styled(Button)({
  display: "flex",
  justifyContent: "center",
  color: "white",
  padding: "8px 24px",
  marginTop: "32px",
  width: "fit-content",
});

let BtnSuccess = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#16a086",
  color: "white",
  padding: "8px 24px",
  marginTop: "32px",
  width: "fit-content",
  alignSelf: "flex-end",
  justifySelf: "flex-end",

  ":hover": {
    backgroundColor: "#1bbc9b",
  },

  [theme.breakpoints.down("md")]: {
    justifySelf: "center",
    alignSelf: "center",
  },
}));

let ContainerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
});
const Form2 = ({ pageNo, completedPage, setCompletedPage, setCompleted }) => {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  let NextStep = () => {
    setCompletedPage([completedPage[0], true]);
    setCompleted(true);
  };

  return (
    <ContainerBox>
      <Grid
        container
        spacing={2}
        flexDirection="column"
        sx={{ alignItems: file || file2 || file3 ? "flex-start" : "center" }}
      >
        <Grid item>
          <label htmlFor="csv-file-input">
            <FileInput
              id="csv-file-input"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              inputComponent={FileInput}
            />
            <UploadButton variant="contained" component="span">
              CSV for Story
            </UploadButton>
          </label>
          {file && (
            <span>
              {" "}
              {file.name.slice(0, 20)}
              {file.name.length > 20 ? "..." : ""}
            </span>
          )}
        </Grid>

        <Grid item>
          <label htmlFor="csv-file-input2">
            <FileInput
              id="csv-file-input2"
              type="file"
              onChange={(e) => setFile2(e.target.files[0])}
              inputComponent={FileInput}
            />
            <UploadButton variant="contained" component="span">
              Game Assests
            </UploadButton>
          </label>
          {file2 && (
            <span>
              {" "}
              {file2.name.slice(0, 20)}
              {file2.name.length > 20 ? "..." : ""}
            </span>
          )}
        </Grid>

        <Grid item>
          <label htmlFor="csv-file-input3">
            <FileInput
              id="csv-file-input3"
              type="file"
              onChange={(e) => setFile3(e.target.files[0])}
              inputComponent={FileInput}
            />
            <UploadButton variant="contained" component="span">
              App Icon
            </UploadButton>
          </label>
          {file3 && (
            <span>
              {" "}
              {file3.name.slice(0, 20)}
              {file3.name.length > 20 ? "..." : ""}
            </span>
          )}
        </Grid>
      </Grid>
      <BtnSuccess onClick={NextStep}>Build Game</BtnSuccess>
    </ContainerBox>
  );
};

export default Form2;

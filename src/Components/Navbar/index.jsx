import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

let NavToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#111725",
});

export default function ButtonAppBar() {
  return (
    <Container>
      <AppBar position="fixed">
        <NavToolbar>
          <Typography variant="h6" component="div">
            Wuri
          </Typography>
          <Typography variant="h6" component="div">
            Writing Assistant
          </Typography>
        </NavToolbar>
      </AppBar>
    </Container>
  );
}

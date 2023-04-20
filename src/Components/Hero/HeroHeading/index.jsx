import { Box, Container, Link, Typography, styled } from "@mui/material";

let SectionContainer = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  height: "40vh",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    height: "100%",

  },
}));

let Heading = styled(Typography)(({theme}) => ({
  fontWeight: "700",
  fontSize: "48px",
  letterSpacing: "4px",
  fontFamily: "Poppins",

  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    margin:"48px 0 24px 0",
    textAlign:"center"
  },
}));

let SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "200",
  fontFamily: "Poppins",

  [theme.breakpoints.down("md")]: {
    marginBottom:"64px",
    textAlign:"center",
    fontSize: "16px",
  },
}));
const HeroHeading = () => {
  return (
    <SectionContainer>
      <Heading> Start Building Your Dream Game Today</Heading>
      <SubHeading>
        Upload Your Story, Assets, and Icon to Create Your Perfect Game. Check
        out the{" "}
        <Link href="#" sx={{ textDecoration: "none" }}>
          Demo here.
        </Link>
      </SubHeading>
    </SectionContainer>
  );
};

export default HeroHeading;

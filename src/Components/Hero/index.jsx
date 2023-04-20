import { Box, Container, styled } from '@mui/material';
import HeroForm from './HeroForm';
import HeroHeading from './HeroHeading';

let HeroContainer = styled(Container)({
    marginTop:"4rem",
    height:"calc(100vh - 4rem)",
})

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  
  [theme.breakpoints.down("md")]:{
    margin:"16px",
    flexDirection:"column-reverse",
    justifyContent:"center",
    height:"fit-content"
  }

}));

const Hero = () => {
  return (
    <HeroContainer>
        <HeroSection>
            <HeroForm />
            <HeroHeading />
        </HeroSection>
    </HeroContainer>
  )
}

export default Hero
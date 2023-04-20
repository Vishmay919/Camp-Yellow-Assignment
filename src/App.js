import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
    </ThemeProvider>
  );
}

export default App;

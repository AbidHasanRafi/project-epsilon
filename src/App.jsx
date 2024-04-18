import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";
import { ThemeProvider } from "./components/theme-context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

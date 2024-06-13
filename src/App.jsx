import { UserProvider } from "./UserContext.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import UserPage from "./UserPage.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users/:username" element={<UserPage />} />
            </Routes>
          </ThemeProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

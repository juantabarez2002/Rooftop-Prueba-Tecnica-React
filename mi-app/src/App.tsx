import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CompanyPage from "./pages/CompanyPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/usuarios" element={<UsersPage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/empresa" element={<CompanyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

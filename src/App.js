import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
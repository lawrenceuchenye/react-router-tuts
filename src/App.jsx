import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="main-container">
      <h1 className="title-container">React Router 6</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

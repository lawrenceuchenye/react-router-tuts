import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";

function App() {
  return (
    <div className="main-container">
      <h1 className="title-container">React Router 6</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <div>
                <h1>CONTACT PAGE</h1>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <h1>ABOUT PAGE</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

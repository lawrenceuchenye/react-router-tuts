import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import SharedLayout from "./Pages/SharedLayout";
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
          <Route path="" element={<SharedLayout />}>
            <Route index path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

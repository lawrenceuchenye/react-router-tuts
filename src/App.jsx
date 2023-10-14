import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1>React Router 6</h1>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

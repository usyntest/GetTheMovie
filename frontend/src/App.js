import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

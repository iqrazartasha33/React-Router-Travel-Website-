import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Aboutpage  from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Contactpage" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
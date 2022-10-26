import "./App.css";
import Viktorina from "./pages/Viktorina/Viktorina";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login/Login";
import Registor from "./pages/registor/Registor";
import {Routes,Route} from "react-router-dom"
import Jovob from "./pages/jovob/Jovob";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Viktorina />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registor" element={<Registor />} />
        <Route path="/rezultat" element={<Jovob />} />
      </Routes>
    </div>
  );
}

export default App;

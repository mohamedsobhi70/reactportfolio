import "./App.css";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Navbar />
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;

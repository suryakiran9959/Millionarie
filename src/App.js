import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/start";
import One from "./components/one";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} /> 
          <Route path="/game" element={<One />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;


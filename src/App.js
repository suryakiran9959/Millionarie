import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./firebase/main"; // Main component
import One from "./components/one";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<One/>} /> {/* Route for the game */}
      </Routes>
    </Router>
  );
}

export default App;





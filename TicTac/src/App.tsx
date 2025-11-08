import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import './pages/GamePage.tsx'
import GamePage from "./pages/GamePage.tsx";

function App() {
  return (
      <Router>
          <Routes>
                <Route path="/" element={<GamePage />} />
          </Routes>
      </Router>
  )
}

export default App

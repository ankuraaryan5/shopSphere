import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Navbar />
            <Home />
          </>
        }/>
      </Routes>
    </Router>
  )
}

export default App

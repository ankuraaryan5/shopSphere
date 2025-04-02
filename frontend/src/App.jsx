import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import NotFound from './Components/NotFound'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default App

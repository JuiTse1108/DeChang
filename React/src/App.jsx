import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Location from './pages/Location'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/location' element={<Location />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

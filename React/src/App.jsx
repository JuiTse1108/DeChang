import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/location' element={<Location />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Location from './components/pages/location/Location'
import About from './components/pages/about/About'
import Menu from './components/pages/menu/Menu'
import Contact from './components/pages/contact/Contact'

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

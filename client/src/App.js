import './App.css';
import Create from './components/Create/Create';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Detail from './components/Detail/Detail';


function App() {
  const location = useLocation();
  
  const showNavbar = location.pathname !== '/';

  return (
    <div className="App">
       {showNavbar && <Navbar />} {/* Colocar el componente Navbar aquí para que se muestre en todas las rutas */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

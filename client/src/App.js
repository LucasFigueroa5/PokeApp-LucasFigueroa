import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;

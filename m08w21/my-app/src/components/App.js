import { Routes, Route, Link } from "react-router-dom";

import Welcome from './Welcome';
import About from './About';
import Login from './Login';

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

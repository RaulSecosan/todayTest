// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Navbar />

      <main>
        <Routes>

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import Container from 'react-bootstrap/Container';
import TopBar from './components/layout/TopBar/TopBar';
import NavBar from './components/layout/NavBar/NavBar';
import About from './components/views/About/About';
import HomeCarousel from './components/features/HomeCarousel/HomeCarousel';

const App = () => {
  return (
    <main>
      <TopBar />
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </main>
  );
}

export default App;
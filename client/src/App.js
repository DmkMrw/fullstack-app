import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import TopBar from './components/layout/TopBar/TopBar';
import NavBar from './components/layout/NavBar/NavBar';
import About from './components/views/About/About';
import Footer from './components/layout/Footer/Footer';
import Rifles from './components/views/Rifles/Rifles';
import Guns from './components/views/Guns/Guns';
import Offer from './components/views/Offer/Offer';
import News from './components/views/News/News';
import ProductPage from './components/views/ProductPage/ProductPage';
import Login from './components/views/Login/Login';

const App = () => {
  return (
    <main>
      <TopBar />
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rifles" element={<Rifles />} />
          <Route path="/guns" element={<Guns />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/news" element={<News />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </main>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import Container from 'react-bootstrap/Container';
import TopBar from './components/layout/TopBar/TopBar';
import NavBar from './components/layout/NavBar/NavBar';

const App = () => {
  return (
    <main>
              <TopBar />
      <Container>

        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
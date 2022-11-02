import React from 'react';
import Container from 'react-bootstrap/Container';
import NewItems from '../NewItems/NewItems';
import Offert from '../Offert/Offert';
import HomeCarousel from '../../features/HomeCarousel/HomeCarousel';

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Container>
        <NewItems />
      </Container>
      < Offert />
    </div>
  );
};

export default Home;
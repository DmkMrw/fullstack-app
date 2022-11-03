import React from 'react';
import Container from 'react-bootstrap/Container';
import NewItems from '../NewItems/NewItems';
import Offer from '../Offer/Offer';
import HomeCarousel from '../../features/HomeCarousel/HomeCarousel';

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Container>
        <NewItems />
      </Container>
      < Offer />
    </div>
  );
};

export default Home;
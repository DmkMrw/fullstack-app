import React from 'react';
import Container from 'react-bootstrap/Container';
import NewItems from '../NewItems/NewItems';

import HomeCarousel from '../../features/HomeCarousel/HomeCarousel';

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Container>
        <NewItems />
      </Container>

    </div>
  );
};

export default Home;
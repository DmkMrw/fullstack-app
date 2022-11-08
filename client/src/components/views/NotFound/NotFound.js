import { Container, Row, Col } from 'react-bootstrap';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={6} >
          <img src="./images/404.jpg" alt="404" />
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
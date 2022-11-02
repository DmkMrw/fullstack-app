import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiGlassesAlt } from 'react-icons/bi';
// import StarsRating from '../StarsRating/StarsRating';

const ProductCard = ({
  id,
  type,
  name,
  price,
  brandNew,
  outOfStock,
  image,
  // starsRating,
}) => {
  return (
    <Card style={{ height: '100%' }} className={styles.card_wrapper}>
      <Card.Img variant="top" src={image} className={styles.image} />
      <Card.Body>
        <Row>
          <Col className={'mb-3 ' + styles.label}>
            {outOfStock && (
              <span className={'mx-1 ' + styles.label_out}>Out of Stock</span>
            )}
          </Col>
        </Row>
        <p className={styles.categories_text}>
          {type}
        </p>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="m-0">
            <span>${price}</span>
        </Card.Text>
        <div className="d-flex justify-content-center">
          {/* <StarsRating stars={starsRating} /> */}
        </div>
        <Link to={'/product/' + id}>
          <Button variant="outline-secondary" size="sm" className="mx-1 mb-1">
            <BiGlassesAlt className="mx-1 " />
            VIEW DETAILS
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
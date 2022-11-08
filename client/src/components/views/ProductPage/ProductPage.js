import { useParams } from "react-router-dom";
import styles from './ProductPage.module.scss';
import { getItemById } from "../../../redux/productRedux";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from "react";


const ProductPage = () => {

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const itemData = useSelector((state) => getItemById(state, id));

  if (loading) {
    return (
      <>
        <Spinner animation="border" role="status" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        {setTimeout(() => {
          setLoading(false)
        }, 200)}
      </>
    )
  }
  else if (!loading) {
    return (
      <div className={styles.container}>
        <Container>
          <h1 className={styles.title}>{itemData.name}</h1>
          <div className={styles.content}>
            <div className={styles.item_image}>
              <img src={itemData.image} alt="data" />
            </div>
            <div className={styles.item_description}>
              <p>{itemData.description}</p>
              <p className={styles.price}>$ {itemData.price}</p>
              <p className={styles.warning}>Zakup i odbiór osobisty wyłącznie w siedzibie firmy po okazaniu zaświadczenia na zakup broni i dowodu osobistego.</p>
            </div>
          </div>
        </Container>
      </div>
    );
  };
};

export default ProductPage;
import { useParams } from "react-router-dom";
import styles from './ProductPage.module.scss';
import { getItemById } from "../../../redux/productRedux";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';

const ProductPage = () => {

  const {id} = useParams();
  console.log('test', id);

  const itemData = useSelector((state) => getItemById(state, id));

  console.log('itemData.image', itemData.image);
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
}

export default ProductPage;
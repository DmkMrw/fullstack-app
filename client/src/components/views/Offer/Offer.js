import styles from './Offer.module.scss';
import { getAllProducts } from '../../../redux/productRedux';
import { useSelector } from "react-redux";
import ProductCard from '../../features/ProductCard/ProductCard';

const Offer = () => {

  const allProductsData = useSelector(getAllProducts);

  return (
    <div className={styles.container}>
      <h1 className={styles.main_title}>All products</h1>
      <div className={styles.products_container}>
        {allProductsData.map(product => <ProductCard key={product.id} name={product.name} type={product.type} price={product.price} image={product.image} id={product.id} />)}
      </div>
    </div>
  );
}

export default Offer;
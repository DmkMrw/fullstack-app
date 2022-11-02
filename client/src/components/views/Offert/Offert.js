import styles from './Offert.module.scss';
import { getAllProducts } from '../../../redux/productRedux';
import { useSelector } from "react-redux";
import ProductCard from '../../features/ProductCard/ProductCard';

const Offert = () => {

  const allProductsData = useSelector(getAllProducts);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All products</h1>
      <div className={styles.products_container}>
        {allProductsData.map(product => <ProductCard key={product.id} name={product.name} type={product.type} price={product.price} image={product.image} />)}
      </div>

    </div>
  );
}

export default Offert;
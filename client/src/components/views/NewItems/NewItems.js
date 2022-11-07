import styles from './NewItems.module.scss';
import { getAllProducts } from '../../../redux/productRedux';
import { useSelector } from "react-redux";
import ProductCard from '../../features/ProductCard/ProductCard';
import { getBrandNewProducts } from '../../../redux/productRedux';


const NewItems = () => {

  const brandNewProductsData = useSelector(getBrandNewProducts);

  console.log('brandNewProductsData', brandNewProductsData);

  return (
    <div className={styles.container}>
      <h1 className={styles.main_title}>Brand New</h1>
      <div className={styles.product_container}>
        {brandNewProductsData.map(product => <ProductCard key={product.id} name={product.name} type={product.type} price={product.price} image={product.image} id={product.id} />)}
      </div>
    </div>
  );
}

export default NewItems;
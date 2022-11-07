import styles from './Rifles.module.scss';
import { getAllRifles } from '../../../redux/productRedux';
import { useSelector } from 'react-redux';
import ProductCard from '../../features/ProductCard/ProductCard';

const Rifles = () => {

  const allRiflesData = useSelector(getAllRifles);

  return (
    <div className={styles.container}>
      <h1 className={styles.main_title}>Rifles</h1>
      <div className={styles.products_container}>
        {allRiflesData.map(product => <ProductCard key={product.id} name={product.name} type={product.type} price={product.price} image={product.image} id={product.id} />)}
      </div>
    </div>
  );
}

export default Rifles;
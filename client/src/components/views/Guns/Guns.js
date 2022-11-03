import styles from './Guns.module.scss';
import { useSelector } from 'react-redux';
import { getAllGuns } from '../../../redux/productRedux';
import ProductCard from '../../features/ProductCard/ProductCard';

const Guns = () => {

  const allGunsData = useSelector(getAllGuns);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Guns</h1>
      <div className={styles.products_container}>
        {allGunsData.map(product => <ProductCard key={product.id} name={product.name} type={product.type} price={product.price} image={product.image} id={product.id} />)}
      </div>
    </div>
  );
}

export default Guns;
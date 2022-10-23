import Nav from 'react-bootstrap/Nav';
import styles from './TopBar.module.scss';
import { BsPerson, BsTelephone, BsFillGeoAltFill, BsEnvelope } from 'react-icons/bs';

const TopBar = () => {
  return (
    <Nav className={styles.root}>
      <div className={styles.container}>
      <Nav.Item>
        <Nav.Link href="/">
          <BsTelephone /> +48 123 123 123
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">
          <BsFillGeoAltFill /> ul. Partyzantów 5, Warszawa
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <BsEnvelope/> gunshop@gun.com
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
          <BsPerson /> Login
        </Nav.Link>
      </Nav.Item>

      </div>

    </Nav>
  );
};

export default TopBar;
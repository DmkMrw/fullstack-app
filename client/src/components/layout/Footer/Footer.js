import styles from './Footer.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsPerson, BsTelephone, BsFillGeoAltFill, BsEnvelope } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={'pt-5 ' + styles.container}>
      <Container>
        <Row>
          {/* <Col xs={12} md={6} className="mb-3">
            <div>
              <div className="img">
                <img
                  src="./images/logo.jpg"
                  alt="brand_logo"
                  className="img-fluid"
                  width={'250px'}
                ></img>
              </div>
            </div>
          </Col> */}
          <Col className="mb-3">
            <div className={styles.contact}>
              <h5 className="pb-3">Contact</h5>
              <div><BsFillGeoAltFill /> ul. Partyzantów 5, Warsaw</div>
              <div><BsTelephone /> +48 123 123 123</div>
              <div><BsEnvelope/> gunshop@gun.com</div>
              <div><a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1"
                >
                  <FaFacebookF />
                </a></div>
              <p>Terms and conditions</p>
            </div>
          </Col>
        </Row>

      </Container>
      <div className={styles.copyright}>
        <p>Copyright &copy; 2022 Gun Shop. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
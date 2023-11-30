import React, { Component } from 'react';
import { withRouter } from './withRouter';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Star, StarFill } from 'react-bootstrap-icons';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch('http://localhost:8080/employees')
      .then((res) => res.json())
      .then((json) => {
        console.log("data" , json)
        // this.setState({
        //   products: json.productDetails,
        // });
      });
  }

  addToCart = () => {
    this.props.navigate('/cart', { state: { someData: id } });
  };

  handleNavigate = (id) => {
    this.props.navigate('/cart', { state: { someData: id } });
  };

  render() {
    console.log('product state', this.state.products);
    const { someData } = this.props.location.state || {};
    console.log('someData', someData);
    return (
      <Container style={{ marginTop: '100px' }}>
        <Row>
          {/* Product 1 */}
          <Col md={6}>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.ulcdn.net/images/products/314083/slide/666x363/Mika_Chair_White_1.jpg?1612930923"
                alt="Study Chair"
              />
            </Card>
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Button variant="primary" size="lg" onClick={() => this.handleNavigate(1)}>
                Add to Cart
              </Button>
              <Button variant="warning" size="lg">
                Buy Now
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <h4>Mika Leatherette Study Chair In Scarlet Red Colour</h4>
            <h3 style={{ color: 'orange' }}>Product Details</h3>
            <ul>
              <li>
                <span>
                  <b> Net Quantity :</b>
                </span>
                <span>1 N</span>
              </li>
              <li>
                <span>
                  <b> Net Quantity :</b>
                </span>
                <span>1 N</span>
              </li>
              <li>
                <span>
                  <b> Product Dimensions:</b>
                </span>
                <span>150.0 cm H x 76.0 cm W x 2.0 cm L</span>
              </li>
              <li>
                <span>
                  <b> Package Contains:</b>
                </span>
                <span>1 Multiple Frames Wall Painting</span>
              </li>
              <li>
                <span>
                  <b> Country of Origin:</b>
                </span>
                <span>India</span>
              </li>
              <li>
                <span>
                  <b>MRP:</b>
                </span>
                <span>
                  <b>₹12,278 (Incl. of all taxes)</b>
                </span>
              </li>
              <li>
                <span>
                  <b>Color:</b>
                </span>
                <span>Red</span>
              </li>
              <li>
                <span>
                  <b>Sold By:</b>
                </span>
                <span>
                  Reliance Retail Limited, 3rd Floor, Court House, Lokmanya
                  Tilak Marg, Dhobi Talao, Mumbai-400026
                </span>
              </li>
            </ul>
            <div>
              <h4>Rating(on scale of 5)</h4>
              <StarFill />
              <StarFill />
              <StarFill />
              <StarFill />
              <Star />
            </div>
            <Row>
              <Col md={6}>
                <address>
                  <h4>Contact Customer-care</h4>
                  <strong>
                    Reliance Retail Limited, 1st, 2nd & 3rd Floor, No. 259 and
                    276 Amarjyothi, Basaveshwara HBCS Layout, Domlur, Bengaluru,
                    560071.
                  </strong>
                  <br />
                  <abbr title="Phone">Telephone: </abbr> 080-69807777 <br />
                  <a href="mailto:#">hello@abc.com</a>
                </address>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(ProductDetails);

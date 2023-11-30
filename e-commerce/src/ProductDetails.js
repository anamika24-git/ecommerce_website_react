import React, { Component } from 'react';
import { withRouter } from './withRouter';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Star, StarFill } from 'react-bootstrap-icons';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, id: 0 };
  }

  componentDidMount() {
    fetch('/productDetails.json')
      .then((res) => res.json())
      .then((json) => {
        console.log("data", json)
        const { id } = this.props.location.state || {};
        if (id) {
          const product = json.productDetails.filter((item) => item.id === id);
          this.setState({
            product: product[0],
            id: id
          });
        }
      });
  }

  handleNavigate = () => {
    this.props.navigate('/cart', { state: { id: this.state.id } });
  };

  render() {
    const { product } = this.state;
    return (
      <Container style={{ marginTop: '100px' }}>
        <Row>
          {/* Product 1 */}
          <Col md={6}>
            <Card>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt="Study Chair"
                height={'400px'}
              />
            </Card>
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Button variant="primary" size="lg" onClick={() => this.handleNavigate()}>
                Add to Cart
              </Button>
              <Button variant="warning" size="lg">
                Buy Now
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <h4>{product.description}</h4>
            <h3 style={{ color: 'orange' }}>Product Details</h3>
            <ul>
              <li>
                <span>
                  <b> Net Quantity :</b>
                </span>
                <span>{product.netQuantity}</span>
              </li>
              <li>
                <span>
                  <b> Product Dimensions:</b>
                </span>
                <span>{product.productDimensions}</span>
              </li>
              <li>
                <span>
                  <b> Package Contains:</b>
                </span>
                <span>{product.packageContains}</span>
              </li>
              <li>
                <span>
                  <b> Country of Origin:</b>
                </span>
                <span>{product.countryOfOrigin}</span>
              </li>
              <li>
                <span>
                  <b>MRP:</b>
                </span>
                <span>
                  <b>{product.mrp}</b>
                </span>
              </li>
              <li>
                <span>
                  <b>Color:</b>
                </span>
                <span>{product.color}</span>
              </li>
              <li>
                <span>
                  <b>Sold By:</b>
                </span>
                <span>
                  {product.soldBy}
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
                    {product?.customerCare?.address}
                  </strong>
                  <br />
                  <abbr title="Phone">Telephone: </abbr>{product?.customerCare?.telephoneNumber} <br />
                  <a href="mailto:#">{product?.customerCare?.email}</a>
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

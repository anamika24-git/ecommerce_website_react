import React, { Component } from 'react';
import { withRouter } from './withRouter';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], selectValue: 1 };
  }

  componentDidMount() {
    fetch('/cart.json')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          products: json.cart,
        });
      });
  }

  handleDropdownChange = (e) => {
    this.setState({ selectValue: e.target.value });
  };

  render() {
    console.log('Cart state', this.state.cart);
    const { someData } = this.props.location.state || {};
    console.log('someData', someData);
    const deliveryCharge = this.state.selectValue > 2 ? 0 : 100;
    return (
      <Container style={{ marginTop: '50px' }}>
        <h3>Shopping Cart</h3>
        <Row>
          {/* Product 1 */}
          <Col md={8}>
            <br />
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '5' }}>PRODUCTS</div>
              <div style={{ flex: '2' }}>DELIVERY DATE</div>
              <div style={{ flex: '1' }}>QUANTITY</div>
              <div style={{ flex: '1' }}>PRICE</div>
            </div>
            <hr />
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '5' }}>
                <div>Mika Leatherette Study Chair In white</div>
                <div>
                  <b>Color :</b>White
                </div>
                <Card style={{ width: '15rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://www.ulcdn.net/images/products/314083/slide/666x363/Mika_Chair_White_1.jpg?1612930923"
                    alt="Study Chair"
                  />
                </Card>
              </div>
              <div style={{ flex: '2' }}>By 24th Nov, 2023</div>
              <div style={{ flex: '1' }}>
                <select id="dropdown" onChange={this.handleDropdownChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
              <div style={{ flex: '1' }}>₹12,288</div>
            </div>
            <hr />
          </Col>
          <Col md={4} style={{ padding: '30px' }}>
            <h5>Price Details</h5>
            <ListGroup>
              <ListGroup.Item
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <span>{`Price(${this.state.selectValue} Item)`}</span>
                <span>
                  <b>{`Rs. ${12278 * this.state.selectValue}`}</b>
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <span>Dsicount</span>
                <span>
                  <b>Rs. 0.0</b>
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <span>GST</span>
                <span>
                  <b>Rs. 0.0%</b>
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <span>Delivery Charges</span>
                <span>
                  <b>{`Rs. ${deliveryCharge}`}</b>
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#eee',
                }}
              >
                <span>Total Amout</span>
                <span>
                  <b>{`Rs. ${
                    12278 * this.state.selectValue + deliveryCharge
                  }`}</b>
                </span>
              </ListGroup.Item>
              <Button variant="warning">
                <b>CHECK OUT</b>
              </Button>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(Cart);

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CardComponent(props) {
  return (
    <Card style={{ width: '20rem', marginBottom: '30px', backgroundColor: props.index % 2 == 0 ? 'lavender' : 'lavenderblush' }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title><h5>{props.title}</h5></Card.Title>
        <Card.Text>By {props.manufacturer} </Card.Text>
        <Card.Text>Price: {props.price} </Card.Text>
      </Card.Body>
      <Button variant="primary" onClick={() => props.handleNavigate(props.id)}>View Details</Button>
    </Card>
  );
}
export default CardComponent;

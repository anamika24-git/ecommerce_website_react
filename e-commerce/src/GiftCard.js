import React from 'react';
import { Card } from 'react-bootstrap';

function GiftCard() {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://www.ulcdn.net/media/gift-cards/hero-desktop/Giftcard-Banner_1440x322px.jpg"
        alt="Furniture World Gift Cards"
      />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Gift Cards</Card.Title>
        <Card.Text>
        Gift cards from Furniture World - lovely, thoughtful present for New Beginnings.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GiftCard;

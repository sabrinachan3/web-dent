import React from 'react'
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

function OpeningHours() {
  return (
    <div className="opening_hours">
      <h3 className="opening_hours_header">Opening Hours:</h3>
      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col sm={8}>Monday:</Col>
          <Col>8:00 - 19:00</Col>
        </Row>
        <Row>
          <Col sm={8}>Tuesday:</Col>
          <Col>10:00 - 14:00</Col>
        </Row>
        <Row>
          <Col>Wednesday:</Col>
          <Col>8:00 - 19:00</Col>
        </Row><Row>
          <Col>Thursday:</Col>
          <Col>8:00 - 14:00</Col>
        </Row>
        <Row>
          <Col>Friday:</Col>
          <Col>8:00 - 14:00</Col>
        </Row>
        <Row>
          <Col>Saturday-Sunday:</Col>
          <Col>Closed</Col>
        </Row>
      </Container>
      </div>
  );
}

export default OpeningHours;
import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <Row xs={1} md={3}>
        {this.props.allWatches.map((item) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description} <br />
                    price:{item.USD}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.props.addFav(
                        item.name,
                        item.image,
                        item.description,
                        item.USD
                      );
                    }}
                  >
                    Add to Fav
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        </Row>
      </>
    );
  }
}

export default Home;

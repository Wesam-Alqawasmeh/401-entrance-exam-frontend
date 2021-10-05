import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

class FavWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      updateWatch: {},
      name: "",
      image: "",
      description: "",
      usd: "",
    };
  }

  nameHandle = (e) => {
    this.setState({
      name: e,
    });
  };
  imageHandle = (e) => {
    this.setState({
      image: e,
    });
  };
  usdHandle = (e) => {
    this.setState({
      usd: e,
    });
  };
  discriptionHandle = (e) => {
    this.setState({
      description: e,
    });
  };

  modalHamdle = (item) => {
    this.setState({
      showModal: true,
      updateWatch: item,
      name: item.name,
      image: item.image,
      description: item.description,
      usd: item.usd,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <>
        <h1>Favorite</h1>
        <Row xs={1} md={3}>
        {this.props.favWatches.map((item) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description} <br />
                    price:{item.usd}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => {
                      this.props.deleteFav(item._id);
                    }}
                  >
                    delete
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.modalHamdle(item);
                    }}
                  >
                    update
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        </Row>
        <UpdateModal
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          nameHandle={this.nameHandle}
          imageHandle={this.imageHandle}
          usdHandle={this.usdHandle}
          discriptionHandle={this.discriptionHandle}
          updateWatch={this.state.updateWatch}
          name={this.state.name}
          image={this.state.image}
          description={this.state.description}
          usd={this.state.usd}
          updateFav={this.props.updateFav}
        />
      </>
    );
  }
}

export default FavWatch;

import React, { Component } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

class UpdateModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              this.props.updateFav(
                e,
                this.props.updateWatch._id,
                this.props.name,
                this.props.image,
                this.props.description,
                this.props.usd
              );
            }}
          >
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                onChange={(event) => this.props.nameHandle(event.target.value)}
              >
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.updateWatch.name}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                onChange={(event) => this.props.imageHandle(event.target.value)}
              >
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.updateWatch.image}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                onChange={(event) =>
                  this.props.discriptionHandle(event.target.value)
                }
              >
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.updateWatch.description}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                onChange={(event) => this.props.usdHandle(event.target.value)}
              >
                <Form.Label>USD</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.updateWatch.usd}
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UpdateModal;

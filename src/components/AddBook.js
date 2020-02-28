import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios'

export class AddBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            audiobooks: []
        }
    }

    componentDidMount() {
        axios.post('http://localhost:5432/api/books', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(res => { 
                this.setState({ audiobooks: res.data });
            }).catch(error => {
                alert('Not working')
            });
}

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Add Audiobook!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                        <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="BookName">
                        <Form.Label>Audiobook Title</Form.Label>
                        <Form.Control
                            type="text"
                            title="BookName"
                            required
                            placeholder="type here..."
                        />
                        <Form.Label>Audiobook Author</Form.Label>
                        <Form.Control
                            type="text"
                            author="AuthorName"
                            required
                            placeholder="type here..."
                        />
                        </Form.Group>
                        <Form.Group>
                        <Button variant="warning" type="submit">
                        Add Audiobook
                        </Button>
                        </Form.Group>
                        </Form>
                        </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"  onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddBook




import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../StyleSheets/Modal.css'

export default class BookList extends Component {
        constructor(props) {
            super(props);
            this.submitHandler = this.submitHandler.bind(this);
            this.state = {
                audiobooks: []
            }
        }

        submitHandler(title) {
            this.setState(state => ({
                audiobooks: state.audiobooks.filter(audiobook => audiobook.title !== title)
            }));
        }

        componentDidMount() {
            axios.get('http://localhost:5432/api/books', { useNewUrlParser: true, useUnifiedTopology: true })
                .then(res => { 
                    this.setState({ audiobooks: res.data });
                }).catch(error => {
                    alert('Not working')
                });
    }
    

    render() {
        const {audiobooks} = this.state

        return (
            <Container>
            <ListGroup>
            <TransitionGroup className="audiobook-list" >
                {audiobooks.map(({ id, title, author }) => (
                    <CSSTransition key={`book_${title}`} timeout={500} classNames="fade">
                    <ListGroupItem>
                    <Button
                        className="remove-btn"
                        variant="danger"
                        size="sm"
                        onClick={this.submitHandler}
                    >&times;</Button>
                        {title}{ ' - ' }{author}
                    </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            </ListGroup>
            </Container>
        )
    }
}
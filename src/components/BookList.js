import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../StyleSheets/Modal.css';

export default class BookList extends Component {
        constructor(props) {
            super(props);
            this.submitHandler = this.submitHandler.bind(this);
            this.updateList = this.updateList.bind(this);
            this.state = {
                audiobooks: []
            }
        };

        submitHandler(_id) {
            axios.delete(`http://localhost:5432/api/books/${_id}`)
            .then(res => {
                this.setState(state => ({
                    audiobooks: state.audiobooks.filter(audiobook => audiobook._id !== _id)
                }))
            })
            .catch(err => {
                console.log(err);
                alert('Not Working')
            });
        };

        componentDidMount() {
           this.updateList()
    }

        updateList(){
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
                {audiobooks.map(({ _id, title, author }) => (
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                    <Button
                        hellojello={_id}
                        className="remove-btn"
                        variant="danger"
                        size="sm"
                        onClick={(e) => this.submitHandler(_id)}
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

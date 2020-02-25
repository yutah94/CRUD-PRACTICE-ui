import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';


export default class BookList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                audiobooks: []
            }
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
        const {audiobooks} =this.state
        return (
            <Container>
            <ListGroup>
            <TransitionGroup className="audiobook-list" >
                {audiobooks.map(({ id, title, author }) => (
                    <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem key={id}>
                    <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={() => {
                            this.setState(state => ({
                                audiobooks: state.audiobooks.filter(audiobook => audiobook.id !== id)
                            }));
                        }}
                    >&times;</Button>
                        {title}{ ' - ' }{author}
                    </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            </ListGroup>
            <Button 
                color="dark" 
                style={{marginBottom: '2em'}} 
                onClick={() => {
                const audiobook = prompt('Enter Book')
                
                if(audiobook) {
                    this.setState(state => ({
                        audiobooks: [...state.audiobooks]
                    }))
                }
            }} >Add Book</Button>
            </Container>
        )
    }
}

// style={styleBooks}>
//                 { this.state.audiobooks.map(audiobook => <li style={listStyle} key={audiobook._id} >{audiobook.title}{' - '}{audiobook.author}</li>)}
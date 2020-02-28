import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { AddBook } from './AddBook'


export default class BookList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                audiobooks: [], addModalShow: false
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
        const {audiobooks} = this.state
        let AddModalClose = () => this.setState({  addModalShow: false });

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
                        onClick={() => {
                            this.setState(state => ({
                                audiobooks: state.audiobooks.filter(audiobook => audiobook.title !== title)
                            }));
                        }}
                    >&times;</Button>
                        {title}{ ' - ' }{author}
                    </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            </ListGroup>
            <br />
            <br />

            <ButtonToolbar>
                    <Button
                    variant='warning'
                    onClick={() => this.setState({ addModalShow: true })}
                    >Add Audiobook</Button>

                    <AddBook 
                    show={this.state.addModalShow}
                    onHide={AddModalClose}
                    />
                </ButtonToolbar>
            </Container>
        )
    }
}

            //<Button 
            //     color="dark" 
            //     style={{marginBottom: '2rem'}} 
            //     onClick={() => {
            //     const audiobook = prompt('Enter Book')
                
            //     if(audiobook) {
            //         this.setState(state => ({
            //             audiobooks: [...state.audiobooks]
            //         }))
            //     }
            // }} >Add Book</Button>
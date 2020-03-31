import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../StyleSheets/Modal.css';
import { uriBase } from '../consts';

export default class TodoList extends Component {
        constructor(props) {
            super(props);
            this.submitHandler = this.submitHandler.bind(this);
            this.updateList = this.updateList.bind(this);
            this.state = {
                todolists: []
            }
        };

        submitHandler(_id) {
            axios.delete(`${uriBase}/api/todos/${_id}`)
            .then(res => {
                this.setState(state => ({
                    todolists: state.todolists.filter(todolist => todolist._id !== _id)
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

        updateList(_id){
            axios.get(`${uriBase}/api/todos`, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(res => { 
                this.setState({ todolists: res.data });
            }).catch(error => {
                alert('Not working')
            });
        }
    

    render() {
        const {todolists} = this.state

        return (
            <Container>
            <ListGroup>
            <TransitionGroup className="audiobook-list" >
                {todolists.map(({ _id, todos, responsible }) => (
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                    <Button
                        hellojello={_id}
                        className="remove-btn"
                        variant="danger"
                        size="sm"
                        onClick={(e) => this.submitHandler(_id)}
                    >&times;</Button>
                        {todos}{ ' - ' }{responsible}
                    </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            </ListGroup>
            </Container>
        )
    }
}

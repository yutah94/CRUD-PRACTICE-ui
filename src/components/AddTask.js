import React, { Component } from 'react';
import '../StyleSheets/Modal.css';
import axios from 'axios';
import { uriBase } from '../consts';

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.addTodos = this.addTodos.bind(this);
        this.todosAdd = React.createRef();
        this.state = {
            todos: '',
            responsible: ''
        }
    };

    handleChange = e => {
        const state = {};
        state[e.target.getAttribute('name')] = e.target.value;
        this.setState(state)
    }

    addTodos(e) {
        e.preventDefault()
        const body = { todos: this.state.todos, responsible: this.state.responsible }
        axios.post(`${uriBase}/api/todos/`, body )
        .then(res => {
            console.log(res)
        })
        .then(res => {
            this.props.list.current.updateList();
        })
        .then(res => {
            document.getElementById("myForm").reset()
        })
        .catch(err => {
            console.log(err);
        });
    };
    
    
    render() {
        return (
            <form onSubmit={this.addTodos} className="container" id="myForm">
                <label className="form-inline">
                    <h4 className="gimmespace">Task:</h4>
                        <input 
                            type="text" 
                            className="form-control"
                            name="todos"
                            onChange={this.handleChange}
                            />
                    <h4 className="gimmespace">Responsible:</h4>
                        <input 
                            type="text" 
                            className="form-control"
                            name="responsible" 
                            onChange={this.handleChange}
                            />
                        <input 
                        type="submit" 
                        className="form-control btn btn-warning f"
                        value="Add Todos"
                        onClick={this.addTodos}
                        />
                </label>
            </form>
        ) 
    }
}

export default AddTask;
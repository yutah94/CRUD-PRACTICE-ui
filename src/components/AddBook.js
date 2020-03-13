import React, { Component } from 'react';
import '../StyleSheets/Modal.css';
import axios from 'axios';

export class AddBook extends Component {
    constructor(props) {
        super(props);
        this.addBook = this.addBook.bind(this);
        this.bookAdd = React.createRef();
        this.state = {
            title: '',
            author: ''
        }
    };

    handleChange = e => {
        const state = {};
        state[e.target.getAttribute('name')] = e.target.value;
        this.setState(state);
    }

    addBook(e) {
        e.preventDefault()
        const body = { title: this.state.title, author: this.state.author }
        axios.post(`http://localhost:5432/api/books/`, body )
        .then(res => {
            console.log(res)
        })
        .then(res => {
            this.props.list.current.updateList();
        })
        .catch(err => {
            console.log(err);
        });
    };
    
    
    render() {
        return (
            <form onSubmit={this.addBook}>
                <label>
                    Title:
                        <input 
                            type="text" 
                            name="title"
                            onChange={this.handleChange}
                            />
                    Author:
                        <input 
                            type="text" 
                            name="author" 
                            onChange={this.handleChange}
                            />
                        <input 
                        type="submit" 
                        value="Add Book"
                        onClick={this.addBook}
                        />
                </label>
            </form>
        ) 
    }
}

export default AddBook;
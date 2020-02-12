import React, { Component } from 'react';
import axios from 'axios';

export default class BookList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                audiobooks: []
            }
        }

        componentDidMount() {
            axios.get('http://localhost:5432/api/books')
                .then(res => { 
                    console.log(res);
                    this.setState({ audiobooks: res.data });
                }).catch(error => {
                    alert('Not working')
                });
    }

    render() {
        return (
            <div>
                { this.state.audiobooks.map(audiobook => <div>{audiobook.title}</div>)}
            </div>
        )
    }
}
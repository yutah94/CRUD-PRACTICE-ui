import React from 'react';
import './App.css';
import axios from 'axios';

export default class BookList extends React.Component {
        constructor() {
            state = {
                audiobooks: []
            }

            componentDidMount() {
                axios.get('https://localhost:5432/api/books')
                    .then(res => {
                        console.log(res);
                        this.setState({ audiobooks: res.data });
                    });

        }
    }

    render() {
        return (
            <ul>
                { this.state.audiobooks.map(audiobook => <li>{audiobook.name}</li>)}
            </ul>
        )
    }
}
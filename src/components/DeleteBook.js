import React, { Component } from 'react'

export class DeleteBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audiobooks: []
        }
    }

    componentDidMount() {
        axios.delete('http://localhost:5432/api/books/delete/:id', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(res => { 
                this.setState({ audiobooks: res.data });
            }).catch(error => {
                alert('Not working')
            });
}

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default DeleteBook

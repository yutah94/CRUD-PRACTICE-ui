import React, { Component } from 'react'

export class DeleteTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolists: []
        }
    }

    componentDidMount() {
        axios.delete('http://localhost:5432/api/books/:id', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(res => { 
                this.setState({ todolists: res.data });
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

export default DeleteTodos

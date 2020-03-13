import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BookList from './components/BookList';
import AppNavbar from './components/AppNavbar';
import AddBook from './components/AddBook';
import './StyleSheets/Modal.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.bookAdd = React.createRef();
};

  render() {
    return (
      <div className="App">
      <AppNavbar />
      <AddBook list={this.bookAdd} />
      <BookList ref={this.bookAdd} />
      </div>
    );
  }
}
export default App;

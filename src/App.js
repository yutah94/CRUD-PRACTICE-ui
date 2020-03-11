import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BookList from './components/BookList';
import AppNavbar from './components/AppNavbar';
import Modal from './components/Modal';
import './StyleSheets/Modal.css';

class App extends Component {
  
  state = {
    show: true
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="App">
      <AppNavbar />
      <BookList />
      <div className="app-btn">
        <button
      onClick={e => {
        this.showModal();
      }}
      > Show Modal </button>
      </div>
      <Modal onClose={this.showModal} show={this.state.show}>Message in Modal</Modal>

      </div>
    );
  }
}
export default App;

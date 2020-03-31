import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TodoList from './components/TodoList';
import AppNavbar from './components/AppNavbar';
import AddTask from './components/AddTask';
import './StyleSheets/Modal.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.todosAdd = React.createRef();
};

  render() {
    return (
      <div className="App">
      <AppNavbar />
      <AddTask list={this.todosAdd} />
      <TodoList ref={this.todosAdd} />
      </div>
    );
  }
}
export default App;

import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 } from 'uuid';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  /*componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }*/

  // toggle complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) } );
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: v4(),
      title, 
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return(
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div className="container">
                <AddTodo addTodo={ this.addTodo }/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </div>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;

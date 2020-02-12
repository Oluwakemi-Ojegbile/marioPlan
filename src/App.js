import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Posts from './components/layout/Posts';

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      this.setState({ posts: [...data] })
    })
    .catch(console.log)
  }


   
  render() {
    console.log(this.state)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/create' component={CreateProject}/>
            <Route path='/posts' render={() => <Posts  posts={this.state.posts} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

import Login from "./components/Login";
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from "./components/Logout";
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h2>Friends DataBase</h2>
          <Link to="/login" className='link'>Login</Link>
          <Link to="/friends" className='link'>Friends List</Link>
          <Link to="/friends/add" className='link'>Add Friends</Link>
          <Link to="/logout" className='link'>Logout</Link>
        </header>

        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/login">
          <Redirect to="/" />
        </Route>

        <PrivateRoute exact path="/friends" component={FriendsList} />
          

        <PrivateRoute exact path="/friends/add" component={AddFriend} />
        

        <PrivateRoute exact path="/logout" component={Logout} />

      </div>
    </Router>
  );
}

export default App;

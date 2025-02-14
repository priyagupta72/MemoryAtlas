import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Map from './components/Map/Map';

const App = () => {
  // ✅ Ensure token exists (not just profile object)
  const user = JSON.parse(localStorage.getItem('profile'));
  const isAuthenticated = user?.token ? true : false; // Check if user has a valid token

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <div className="app-content">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/posts" />
            </Route>
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />

            {/* ✅ Restrict access to PostDetails only if logged in */}
            <Route 
              path="/posts/:id" 
              exact 
              render={(props) => 
                isAuthenticated ? <PostDetails {...props} /> : <Redirect to="/auth" />
              } 
            />

            {/* ✅ Redirect signed-in users away from Auth */}
            <Route path="/auth" exact>
              {!isAuthenticated ? <Auth /> : <Redirect to="/posts" />}
            </Route>

            <Route path="/map" exact component={Map} />
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;

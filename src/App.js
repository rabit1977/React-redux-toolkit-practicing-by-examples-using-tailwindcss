import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';

import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route
            path='/'
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Navigate replace to='/' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

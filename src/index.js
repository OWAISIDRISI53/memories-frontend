import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PostState from './context/post/PostState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PostState>
    <App />
  </PostState>
);


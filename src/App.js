import React from 'react';
import './App.css';
import Form from './components/Form';
import BookmarkList from './components/BookmarkList';

function App() {
  return (
    <div className='App'>
      <h1>Bookmarks</h1>
      <Form />
      <small>paste here the link you want it in th list</small>
      <hr />
      <BookmarkList />
    </div>
  );
}

export default App;

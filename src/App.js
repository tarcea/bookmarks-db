import React from 'react';
import './App.css';
import Form from './components/Form';
import BookmarkList from './components/BookmarkList';

function App() {

  return (
    <div className='App main-container'>
      <div className="header-container">
        <h1>Bookmarks</h1>
        <Form />
      </div>
        <BookmarkList />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Form from './components/Form';
import BookmarkList from './components/BookmarkList';

function App() {
  return (
    <div className="App">
      <h1>Bookmark</h1>
      <Form />
      <BookmarkList />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import BookmarkList from './components/BookmarkList';
import FormPreview from './components/FormPreview';

function App() {

  return (
    <div className='App main-container'>
      <div className="header-container">
        <h1>Bookmarks</h1>
        <FormPreview />
      </div>
        <BookmarkList />
    </div>
  );
}

export default App;

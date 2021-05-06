import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import BookmarkList from './components/BookmarkList';
import firebase from './firebase/firebase';

function App() {
  const [bookmarkList, setBookmarkList] = useState();
  const [length, setLength] = useState(0);

  useEffect(() => {
    const markRef = firebase.database().ref('Bookmarks');
    markRef.on('value', (snapshot) => {
      const bookmarks = snapshot.val();
      const bookmarkList = [];
      for (let id in bookmarks) {
        bookmarkList.push({ id, ...bookmarks[id] });
      }
      setBookmarkList(bookmarkList);
      setLength(bookmarkList.length)
    });
  }, []);

  return (
    <div className='App main-container'>
      <div className="header-container">
        <h1>Bookmarks</h1>
        <Form length={length}/>
      </div>
        <BookmarkList bookmarkList={bookmarkList} />
    </div>
  );
}

export default App;

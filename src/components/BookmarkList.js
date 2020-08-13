import React, { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';
import Bookmark from './Bookmark';
import '../css/style.css';

const BookmarkList = () => {

const [bookmarkList, setBookmarkList] = useState();

  useEffect(() => {
    const markRef = firebase.database().ref('Bookmarks');
    markRef.on('value', (snapshot) => {
      const bookmarks = snapshot.val();
      const bookmarkList = [];
      for (let id in bookmarks) {
        bookmarkList.push({ id, ...bookmarks[id] });
      }
      setBookmarkList(bookmarkList);
    });
  }, []);

  return (
    <div className="content-container">
      <div className="badge">
        <div className="counter">
          {bookmarkList ? bookmarkList.length : ''}
        </div>
      </div>
      <div className="parent">
        {bookmarkList
            ? bookmarkList.map((value, index, array) => <Bookmark bookmark={array[array.length - 1 - index]} key={index} />)
            : ''}
      </div>
    </div>
  );
}

export default BookmarkList;


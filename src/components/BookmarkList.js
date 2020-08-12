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
    <div className="parent">
    {bookmarkList
        ? bookmarkList.map((mark, index) => <Bookmark bookmark={mark} key={index} />)
        : ''}
    </div>
  );
}

export default BookmarkList;


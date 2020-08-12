import React from 'react';
import firebase from '../firebase/firebase';
import '../css/style.css';

const Bookmark = ({ bookmark }) => {
  const deleteBookmark = () => {
    const markRef = firebase.database().ref('Bookmarks').child(bookmark.id);
    markRef.remove();
  };
  // const completeTodo = () => {
  //   const todoRef = firebase.database().ref('Todo').child(todo.id);
  //   todoRef.update({
  //     complete: !todo.complete,
  //   });
  // };
  return (
    <div>
      <hr />

      <h4>{bookmark.title}</h4>
      <img className="img" src={bookmark.img} alt={bookmark.title} />
      <p>{bookmark.description}</p>
      <div className="casset-buttons">
      <button className="button-ghost" onClick={deleteBookmark} disabled>Delete</button>
      <button className="button-ghost">Go There</button>
      </div>
    </div>
  );
}

export default Bookmark;

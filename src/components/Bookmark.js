import React from 'react';
import firebase from '../firebase/firebase';
import '../App.css';

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
      <img className="img-round" src={bookmark.img} alt={bookmark.title} />
      <p>{bookmark.description}</p>
      <button onClick={deleteBookmark}>Delete</button>
    </div>
  );
}

export default Bookmark;

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
    <div class="box">
        <h5><strong>{bookmark.title}</strong></h5>
        <img className="img" src={bookmark.img} alt={bookmark.title} />
        <p>{bookmark.description}</p>
        <button className="button-x" onClick={deleteBookmark} disabled><i class="fas fa-times"></i></button>
        <button className="button-ghost-go">Go There</button>

    </div>
  );
}

export default Bookmark;

import React from 'react';
import firebase from '../firebase/firebase';
import '../css/style.css';


const Bookmark = ({ bookmark }) => {
  const deleteBookmark = () => {
    const markRef = firebase.database().ref('Bookmarks').child(bookmark.id);
    markRef.remove();
  };
  // const goThere = (to: string) => {
  //   //todo
  // };
  return (
    <div className="box">
        <h5><strong>{bookmark.title}</strong></h5>
        <img className="img" src={bookmark.img} alt={bookmark.title} />
          <div className='description'>
            <p>{bookmark.description}</p>
          </div>
        <button className="button-x" onClick={deleteBookmark}><i className="fas fa-times"></i></button>
        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
        <button className="button-ghost-go" >Go There</button></a>

    </div>
  );
}

export default Bookmark;

import React, { useState } from 'react';
import firebase from '../firebase/firebase';
import LinkPreview from '@ashwamegh/react-link-preview';
import '../css/style.css';

const Form = () => {
  const [url, setUrl] = useState('');

  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };
const details = {}

  const CustomComponent = ({ loading, preview }) => {
      details.domain = preview.domain
      details.description = preview.description
      details.img = preview.img
      details.title = preview.title
      details.url = url
    // console.log(details)
    return loading
    ? (<h1>Loading preview...</h1>)
    : (
        <div>
            <p>Domain: { preview.domain }</p>
            <p>Title: { preview.title }</p>
            <p>Description: { preview.description }</p>
            <img height="100px" width="100px" src={preview.img} alt={preview.title} />
        </div>
    )

}

  const createBookmark = () => {
    const markRef = firebase.database().ref('Bookmarks');
    const bookmark = {
      domain: details.domain,
      description: details.description,
      img: details.img,
      title: details.title,
      url: details.url
    };
    markRef.push(bookmark);
  };
  return (
    <div>
      <div>
        <input type="text" onChange={handleOnChange} value={url} className="form" placeholder="paste here the web address" />
        <button className='button-ghost' onClick={createBookmark}>Bookmark</button>
        <LinkPreview url={url} render={CustomComponent}/>
      </div>
    </div>
  );
}

export default Form;

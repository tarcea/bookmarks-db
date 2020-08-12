import React, { useState } from 'react';
import firebase from '../firebase/firebase';
import LinkPreview from '@ashwamegh/react-link-preview';

const Form = () => {
  const [url, setUrl] = useState('');

  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };
const details = {}
  const CustomComponent = ({ loading, preview }) => {
    console.log(loading)
      details.url = preview.domain
      details.description = preview.description
      details.img = preview.img
      details.title = preview.title
    // console.log(details)
    return loading
    ? (<h1>Loading...</h1>)
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
      url: details.url,
      description: details.description,
      img: details.img,
    };

    markRef.push(bookmark);
  };
  return (
    <div>
      <div>
      <input type="text" onChange={handleOnChange} value={url} />
      <button onClick={createBookmark}>Add bookmark</button>
      <LinkPreview url={url} render={CustomComponent}/>
    </div>
    </div>
  );
}

export default Form;

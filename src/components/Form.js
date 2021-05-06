import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebase';
import LinkPreview from '@ashwamegh/react-link-preview';
import '../css/style.css';

const Form = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  
  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };

const CustomComponent = ({ loading, preview }) => {
    details.domain = preview.domain
    details.description = preview.description
    details.img = preview.img
    details.title = preview.title
    details.url = url
    setLoading(loading)
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

  const createBookmark = (e) => {
    const markRef = firebase.database().ref('Bookmarks');
    const bookmark = {
      domain: details.domain,
      description: details.description,
      img: details.img,
      title: details.title,
      url: details.url
    };
    markRef.push(bookmark);
    setUrl('');
    setDetails({});
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleOnChange} value={url} className="form" placeholder="paste here the web address" />
        {loading || !url ? (
          <button 
          className='button-ghost' 
        >
          Bookmark
        </button>
        ) :
        <button 
        className='button-ghost' 
        onClick={createBookmark}
      >
        Bookmark
      </button>
        }
        {url && <LinkPreview url={url} render={CustomComponent}/>}
      </div>
    </div>
  );
}

export default Form;

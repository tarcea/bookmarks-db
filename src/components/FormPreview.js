import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebase';
import axios from 'axios';

import '../css/style.css';
import LinkPreview from './LinkPreview';

const FormPreview = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);
  const key = process.env.REACT_APP_LINKPREVIEW_KEY;
  const baseUrl = process.env.REACT_APP_LINKPREVIEW_BASE_URL;
  
  // fetching infos from a given url
  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await axios.post(
        baseUrl,
        {
          q: url,
          key: key
        }
      );
      setData(result.data);
    } catch (err) {
      setError(err.response.data.description)
    }
    setLoading(false);
    setPreview(true)
  };

  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };

  const createBookmark = (e) => {
    const markRef = firebase.database().ref('Bookmarks');
    const bookmark = {
      domain: data.url,
      description: data.description,
      img: data.image,
      title: data.title,
      url: data.url
    };
    markRef.push(bookmark);
    setUrl('');
    setData({});
    setPreview(false)
  };

  const cancelPreview = () => {
    setPreview(false);
    setUrl('');
    setError('');
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          onChange={handleOnChange} 
          value={url} 
          className="form" 
          placeholder="paste here the web address" 
        />
        {!preview ? (
          <button 
          className='button-ghost' 
          onClick={() => fetchData()}
          disabled={!url}
        >
          Preview
        </button>
        ) :
        <button 
        className='button-ghost' 
        onClick={createBookmark}
      >
        Bookmark
      </button>
        }
        <br />
        {error && 
          <div className="danger">
            {`linkpreview.net error: ${error}`}
            <button className="button-x" onClick={cancelPreview} style={{top: "1px", right: "1px"}}>X</button>
          </div>
          }
        {loading ? <p>Loading preview...</p> : (
          !error && preview && 
          <LinkPreview 
            data={data} 
            setUrl={setUrl} 
            setPreview={setPreview}
            createBookmark={createBookmark}
          />
        )}
      </div>
    </div>
  );
}

export default FormPreview;

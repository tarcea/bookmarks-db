import React from 'react';

const LinkPreview = ({ data, setUrl, setPreview }) => {

  const cancelPreview = () => {
    setPreview(false);
    setUrl('');
  };
  return (
    <div>
      <p>Domain: { data.url }</p>
      <p>Title: { data.title }</p>
      <p>Description: { data.description }</p>
      <img height="100px" width="100px" src={data.image} alt={data.title} />
      <button onClick={cancelPreview}>cancel</button>
      </div>
  );
};

export default LinkPreview;
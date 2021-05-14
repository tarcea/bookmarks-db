import React from 'react';

const LinkPreview = ({ data, setUrl, setPreview }) => {

  const cancelPreview = () => {
    setPreview(false);
    setUrl('');
  };
  return (
    <div>
      <button className='button-ghost' onClick={cancelPreview}>cancel</button>
      <p>Domain: { data.url }</p>
      <p>Title: { data.title }</p>
      <p>Description: { data.description }</p>
      <img height="100px" width="100px" src={data.image} alt={data.title} />
      </div>
  );
};

export default LinkPreview;
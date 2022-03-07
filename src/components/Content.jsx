import React from 'react';
import albert from '../assets/albert.jpg'

const Content = ({ data }) => {
  if (data.loading)
    return (
      <section className='messages'>
        <p className='message-text'>Loading...</p>
      </section>
    );
  if (data.error)
    return (
      <section className='messages'>
        <h2 className='message-text'>
          Don't fuck my Page!!! 
        </h2>
        <img src={albert} alt="genius man" />
      </section>
    );

  return (
    <section className='content'>
      {data.results &&
        data.results.results.map((image) => (
          <img key={image.id} src={image.urls.thumb} alt='' />
        ))}
    </section>
  );
};

export default Content;
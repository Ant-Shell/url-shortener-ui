import React from 'react';
import Card from "../Card/Card"
import './UrlContainer.css';

const UrlContainer = ({urlList}) => {
  console.log(urlList)
  const urlEls = urlList.map(url => {
    const {id, title, short_url, long_url } = url
    return (
      <Card 
        id={id}
        title={title}
        short_url={short_url}
        long_url={long_url}
        key={id}
      />
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;

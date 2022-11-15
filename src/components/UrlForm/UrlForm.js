import React, { useState} from "react"

const UrlForm = ( {addURL} ) => {
    const [title, setTitle] = useState('')
    const [urlToShorten, seturlToShorten] = useState('')


  const handleSubmit = e => {
    e.preventDefault();

    const newURL = {
      long_url: urlToShorten,
      title: title
    }
    addURL(newURL)
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('')
    seturlToShorten('')
  }

    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='url'
          value={urlToShorten}
          onChange={e => seturlToShorten(e.target.value)}
        />

        <button onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }

export default UrlForm;

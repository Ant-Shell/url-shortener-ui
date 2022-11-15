import React, { useState} from "react"

const UrlForm = ( {addURL} ) => {
    const [title, setTitle] = useState('')
    const [urlToShorten, seturlToShorten] = useState('')
    const [missingvalueMsg, setmissingvalueMsg] = useState('')


  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !urlToShorten) {
      setmissingvalueMsg('Please enter all values')
    } else {
      const newURL = {
        long_url: urlToShorten,
        title: title
      }
      addURL(newURL)
      clearInputs();
      setmissingvalueMsg('')
    }
  }

  const clearInputs = () => {
    setTitle('')
    seturlToShorten('')
  }

    return (
      <form data-cy="input-form">
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          data-cy="title"
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='url'
          value={urlToShorten}
          data-cy="url"
          onChange={e => seturlToShorten(e.target.value)}
        />

        <button data-cy="submit-button" onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button>
        {missingvalueMsg && <p>{missingvalueMsg}</p>}
      </form>
    )
  }

export default UrlForm;

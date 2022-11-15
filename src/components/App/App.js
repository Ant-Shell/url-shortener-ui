import React, {useState, useEffect} from "react"
import './App.css';
import { getUrls, postURL } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const  App = () => {
  const [urlList, setUrlList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getUrls(setUrlList, setError)
  }, [])

  const addURL = (url) => {
    postURL(url)
    .then(data => setUrlList([...urlList, data]))
  }

    return (
      <main className="App">
        <header>
          <h1 data-cy="banner">URL Shortener</h1>
          <UrlForm addURL={addURL}/>
        </header>
        {error && <p>An error has occured.</p>}
        {urlList.length && <UrlContainer urlList={urlList}/>}
      </main>
    );
  }

export default App;

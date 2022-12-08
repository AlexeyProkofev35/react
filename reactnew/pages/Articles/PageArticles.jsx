import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Articles() {
  /*
  const promise = new Promise((resolve, reject) => {
    // ...todo
    if(true) {
      resolve('Done')
    } else {
      reject('Error erro asd343242')
    }
  })
  // console.log('promise', promise);
  promise
    .then((res) => res)
    .then((data) => console.log(data +' ASDASDas'))
    .catch((er) => console.log(er))
    .finally(() => console.log('FINISH'))
  */
  
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)

  const getFetchArticles = async () => {
    /*
    try {
      const data = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
      console.log(data)
    } catch (error) {
     console.log(error) 
    } finally {
      console.log('FINISH')
    }
    */
    setLoading(true)
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
      if(response.ok) {
        const data = await response.json()
        setArticles(data)
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // getFetchArticles()
  }, [])

  return (
    <>
      <h1>Articles Page</h1>
      {loading && <p>Loading....</p>}
      <button 
        type="button"
        onClick={getFetchArticles}
        className="btn btn-secondary"
      >
        Get data from api
      </button>
      {!loading && (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}
      {error && <p style={{color: 'red'}}>{error.message}</p>}
    </>
  )
}

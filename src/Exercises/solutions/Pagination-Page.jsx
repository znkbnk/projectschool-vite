const solutionCode1 = `
//App.js

import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import './styles.css'

function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [data, loading, page])

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'Practice Pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={\`page-btn \${index === page ? 'active-btn' : null}\`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App

`;

const solutionCode2 = `
//Follower.js

import React from 'react'

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>\${login}</h4>
      <a href={html_url} className='btn'>
        view profile
      </a>
    </article>
  )
}

export default Follower

`;
const solutionCode3 = `
//useFetch.js

import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/znkbnk/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(paginate(data))
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}

`;
const solutionCode4 = `
//utils.js

const paginate = (followers) => {
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return followers.slice(start, start + itemsPerPage);
    });
  
    return newFollowers;
  };
  
  export default paginate;
  
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3, solutionCode4];

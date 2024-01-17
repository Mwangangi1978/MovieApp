import { useState, useEffect} from 'react'
import './App.css'
import Header from './assets/Components/Header'
import SearchBox from './assets/Components/SearchBox'
import CardGrid from './assets/Components/cardGrid'
import { Flex } from '@chakra-ui/react'


const API_URL = 'http://www.omdbapi.com?apikey=813042b1' 

function App() {

  const [title, setTitle] = useState('shrek')
  const [movies, setMovies] = useState([])

  const searchMovies = async (title)=>{
    const response = await fetch (`${API_URL}&s=${title} `)
    const data = await response.json();
    setMovies(data.Search)
    console.log(data.Search)
  }
  

  useEffect(()=>{
    searchMovies(title)
  }, [])

  const handleSearch =()=>{
    searchMovies(title)
  }

  const handleChange =(event)=>{
    const {value} = event.target
    setTitle(value)
    console.log(title)
  }
   
  return (
    <>
      <Flex direction="column" className='page-background' >
        <Header />
        <SearchBox value={title} onChange={handleChange} onClick={handleSearch}/>
        {movies?.length > 0 ?(
          <>
            {movies.map((movie)=>(
              <CardGrid key={movie.imdbId} poster={movie.Poster} title={movie.Title} year={movie.Type}/>
            ))}
          </>
          ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
          )
        } 
      </Flex>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.css'
const API_URL = 'http://www.omdbapi.com?apikey=813042b1' 

function App() {
  const searchMovies = async (title)=>{
    const response = await fetch (`${API_URL}&s=${title} `)
    const data = await response.json();
    console.log(data)
  }
  
  useEffect(()=>{
    searchMovies('spiderman')
  }, [])
   
  return (
    <>
      <h1>Movie App</h1>
    </>
  )
}

export default App

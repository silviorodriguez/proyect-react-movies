import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {
    const [movies, setMovies ] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log(error))
    }, [])

    const handleInputChange = event => {
        setSearchTerm(event.target.value)
    }

  

    const filteredMovies = movies.filter(movie =>{
        return movie.name.toLowerCase().includes(searchTerm.toLowerCase())
        
    })
    
  
    return (
        <>
        <div style={{backgroundColor:'#2E2C2B'}}>
            <div className='container mb-2'>
             <center><h1 style={{color:'white'}}>Movies</h1>
              <form className='form-inline my-2 my-lg-0 w-75'>
                <input type='text' className='form-control' id='search' placeholder='Enter name' value={searchTerm} onChange={handleInputChange} />
              </form> </center>
            </div>
            <div className='row ml-4'style={{backgroundColor:'#2E2C2B'}}>
              {filteredMovies.map(movie => (
                <div className='col-sm-3 mt-4' key={movie.name}>
                  <div className='card' style={{ width: '18rem', backgroundColor:'black' }}>
                    <div /> 
                    <img className='card-img-top' src={movie.image.original} alt={movie.id} />
                   <center> <h4 className='mt-3'><Link style={{textDecoration:'none', color:'white'}} to={`/movie/${movie.id}`}>
                  <p>{movie?.name}</p>
                </Link> </h4></center>
                    <div className='card-body'>
                    </div>
                  </div>
                </div>  
              ))}
            </div>
            </div>
          </>
      )
    }
    export default Home
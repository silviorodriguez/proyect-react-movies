import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ActorDetail from '../components/ActorDetail'


const MoviesDetail = () => {
    const [movie, setMovie ] = useState(null)
    const { id } = useParams()

    useEffect(() => {
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.log(error))
    }, [id])

       
       return (
        <div style={{backgroundColor:'#2E2C2B'}}>
        <center><div><h1 style={{color:'white'}}>{movie?.name}</h1></div> <div className="card" style={{ width: "30rem" }}>
  <img src={movie?.image.original} className="card-img-to" alt="..." />
  <div  className="card-body" style={{backgroundColor:'black', color:'white'}} >
    <p className="card-text">
      <b><h3>Description:</h3></b>{movie?.summary}
      <b><h5>Gender:</h5></b>{movie?.genres}
      <b><h5>Ended:</h5></b>{movie?.ended}
      <b><h5>premiered:</h5></b>{movie?.premiered}
      <b><h5>Time:</h5></b>{movie?.schedule.time}
      <b><h5>Days:</h5></b>{movie?.schedule.days}
      <b><h5>rating:</h5></b>{movie?.rating.average}
    </p>
  </div>  
</div>
<div className='row'>
            <div className='col'>
              <br />
              <h5 style={{color:'white'}}>Cast</h5>
              <ActorDetail id={id} />
            </div>
          </div>
</center>
</div>
  );
  
};
export default MoviesDetail
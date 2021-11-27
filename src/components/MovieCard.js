import React from 'react'
import ReactStars from "react-rating-stars-component";
function MovieCard({Movies,search , rating }) {
    return (
        <div className='movies'>
             {Movies
             .filter(el =>  el.title.toUpperCase().includes(search.toUpperCase() .trim())  && el.rating<=rating )
            
            .map((el )=> <div className='film'>
            <img src={el.posterURL} />
                <h1>{el.title}</h1> 
                <ReactStars
    value={el.rating}
    
    activeColor="#ffd700"
  />
        
              </div>)
                }
    </div>
             


    )
}

export default MovieCard

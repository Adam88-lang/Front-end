//hero section that displays movies in carousel
import './hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';

const Hero = ({movies}) => {
  return (
    //mapping each item in movies array to item displayed in carousel
    //Paper encapsulates each movie item
    <div>
        <Carousel>
            
            {
                movies.map((movie) => {
                    return(
                        <Paper>
                            <div className = 'movie-card-container'>
                                <div className = "movie-card">
                                    <div className ="movie-detail">
                                        <div className="movie-poster">
                                            <img src = {movie.poster} alt ="" />
                                        </div>
                                        <div className = "movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero
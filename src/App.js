import './App.css';
import axios from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'

function App() {

  /*destructured array which returns an array of movie data returned from call to api endpoint
  setmovies turns the state of the movies variable.  When the state
  is changed, the component is re-rendered by react.
  */
  const [movies, setMovies] = useState();

  const getMovies = async() =>{

    try
    {
    // handles http get request to endpoint that returns array of movie data
    //also passing additional path info appended to base url
    //await is for async thread management
    const response = await api.get("/api/v1/movies");

    console.log(response.data);

    setMovies(response.data);

  

    } 
    catch(err)
    {
      console.log(err);
    }



  }

  //for executing getMovies when first loads
useEffect(() => {
  getMovies();
},[])

  return (
    <div className="App">
      
      <Routes>
        <Route path = "/" element={<Layout/>}>
          <Route path = "/" element = {<Home movies ={movies} />} ></Route>


        </Route>
      </Routes>

    </div>
  );
}

export default App;


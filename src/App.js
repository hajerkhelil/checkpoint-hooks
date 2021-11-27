import MovieCard from'./components/MovieCard'
import Search from'./components/search.js'
import './App.css';
import React from 'react'
import Nav from'./components/NavBar.js'
import Add from './components/add';
import {useState}from 'react'
import see from './images/see.jpg'
import Home from './images/home.jpg'
import Green from './images/green.png'
import Me from './images/Me.jpg'
import To from './images/To.jpg'
import hard from './images/hard.jpg'
import Gone from './images/Gone.jpg'
import Rating from './components/rating'
function App() {
  const [Movies, setMovies]=useState([ {title:'Hard love', description :'chrismats movie ,love and drama', posterURL:hard,rating:'2'},
    {title:'Now yousee ', description :'action , adventeur, drama', posterURL:see,rating:'2'} ,
    {title:'Gone Girl', description :'drama , crime', posterURL:Gone,rating:'5'},
    {title:'Green Book', description :'drama', posterURL:Green,rating:'3'},
    {title:'Me befor u', description :'drama , romance', posterURL:Me,rating:'4'},
    {title:'Home Alone', description :'fun , comedie', posterURL:Home,rating:'5'},
    {title:'to all boys ', description :'romance', posterURL:To,rating:'4'} ,
    {title:'Gone Girl', description :'drama , crime', posterURL:Gone,rating:'5'},
]);
const [search,setSearch]=useState('');
const [rating,setRating]=useState('');

  return (
    <div className="App">
    
       <Nav/>
       <Search  setSearch={setSearch}/>
    <MovieCard Movies={Movies}  search={search}  rating={rating}/>
    <Add Movies={Movies} setMovies={setMovies} />
    <Rating   setRating={setRating} />
  
    </div>
   
  );
}

export default App;

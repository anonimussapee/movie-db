import { Outlet } from 'react-router-dom'
import { HomePage } from '../../Pages/HomePage'
import { createContext, useContext, useEffect, useState } from 'react'


const routesList = [
  {path: '/', title: 'Home' , renderElement : (<HomePage/>) , private: false, nesting:{nest:false,} },
  {path:'/home', title: 'Home' , renderElement : (<HomePage/>) , private: false, nesting:{nest:false,}  },
  {path:'/movie', title: 'Peliculas' , renderElement : (<div>popularPage<Outlet/></div>) , private: false, nesting:{nest:true, list:[
    {path:'s', title: 'popular' , renderElement : (<p>popular jhdsbhjsb</p>) , private: false,},
  ],}  },
  
]

const ContextMovie = createContext()

const ContextMovieProvided = ({children}) => {
  const [movieDb, setMovieDb] = useState(null)

  useEffect(()=>{

    try{ const url = 'https://api.themoviedb.org/3/movie/changes';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDJhMTA5NjhhNGQ4NjBiNjYxMmMxYmFjYjJkMDYzOCIsInN1YiI6IjY1MDgyMTU4Mzk0YTg3MDBlMjI2ZWM1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EEPACz8jEl2hKB7tm54QvQ04DZhzHZhd67YuMZZwRlk'
        }
      };
      fetch(url, options)
        .then(res => res.json())
        .then(json => {console.log(json), setMovieDb(json)})
        .catch(err => console.error('error:' + err));}
    catch (error){
        console.log(error, 'no se hizo la fetch bro')
      }
  },[])

  return (
    <ContextMovie.Provider value={{movieDb}}>
      {children}
    </ContextMovie.Provider>
  )
} 

const useMovieContext = () =>{
  const {movieDb}= useContext(ContextMovie)
  return {movieDb}
}
export {routesList, ContextMovieProvided, useMovieContext}
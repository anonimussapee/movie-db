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
  // movie trend list
  const [movieDbTrend, setMovieDbTrend] = useState(null)
  // movie trend change search api
  const [trendQuery,setTrendQuery] = useState({today: true, week: false})
  const [loadTrend, setLoadTrend] = useState(false)
  
  // peliculas de estreno 
  const [movieDbUpcomming, setMovieDbUpcomming] = useState(null)
  const [loadUpc, setLoadUpc] = useState(false)
  // popular movie 
  const [moviePopular, setMoviePopular] = useState(null)
  const [loadPopular, setLoadPopular] = useState(false)



  const API_KEY = import.meta.env.VITE_API_KEY

  // este useeffect es para tendencias
  useEffect(()=>{

    try{ const url = `https://api.themoviedb.org/3/trending/movie/${trendQuery.today ? 'day?language=es-ES' : 'week?language=es-ES'}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `${API_KEY}`
        }
      };
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setMovieDbTrend(json)
          setLoadTrend(true)
        })
        .catch(err => console.error('error:' + err));}
    catch (error){
        console.log(error, 'no se hizo la fetch bro')
      }
  },[trendQuery])
  
  // este useEffect es para avances de peliculas estrenadas

  useEffect(()=>{

      
    try{ const url = `https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `${API_KEY}`
        }
      };
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setMovieDbUpcomming(json)
          setLoadUpc(true)
        })
        .catch(err => console.error('error:' + err));}
    catch (error){
        console.log(error, 'no se hizo la fetch bro')
      }
  },[])

    // este useEffect es para peliculas populares

    useEffect(()=>{

      
      try{ const url = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `${API_KEY}`
          }
        };
        fetch(url, options)
          .then(res => res.json())
          .then(json => {
            setMoviePopular(json)
            setLoadPopular(true)
          })
          .catch(err => console.error('error:' + err));}
      catch (error){
          console.log(error, 'no se hizo la fetch movie popular bro')
        }
    },[])

  return (
    <ContextMovie.Provider value={{movieDbTrend, loadTrend, setLoadTrend, loadUpc, setTrendQuery, trendQuery, movieDbUpcomming, moviePopular ,loadPopular}}>
      {children}
    </ContextMovie.Provider>
  )
} 

const useMovieContext = () =>{
  const {movieDbTrend, loadTrend, setLoadTrend, loadUpc , setTrendQuery, trendQuery, movieDbUpcomming, moviePopular ,loadPopular}= useContext(ContextMovie)
  return {movieDbTrend, loadTrend, setLoadTrend, loadUpc, setTrendQuery, trendQuery, movieDbUpcomming, moviePopular ,loadPopular}
}
export {routesList, ContextMovieProvided, useMovieContext}

// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
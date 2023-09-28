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
  const [movieDbTrend, setMovieDbTrend] = useState(null)
  const [trendQuery,setTrendQuery] = useState({today: true, week: false})
  const [movieDbUpcomming, setMovieDbUpcomming] = useState(null)
  const [loadTrend, setLoadTrend] = useState(false)
  const [loadUpc, setLoadUpc] = useState(false)



  const API_KEY = import.meta.env.VITE_API_KEY

  // este useeffect es para tendencias
  useEffect(()=>{

    try{ const url = `https://api.themoviedb.org/3/trending/movie/${trendQuery.today ? 'day' : 'week'}`;
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
  
  // este useEffect es para avances de peliculas trailers

  useEffect(()=>{

      
    try{ const url = `https://api.themoviedb.org/3/movie/upcoming`;
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
          console.log(json)
          setMovieDbUpcomming(json)
          setLoadUpc(true)
        })
        .catch(err => console.error('error:' + err));}
    catch (error){
        console.log(error, 'no se hizo la fetch bro')
      }
  },[])
  return (
    <ContextMovie.Provider value={{movieDbTrend, loadTrend, loadUpc, setTrendQuery, trendQuery, movieDbUpcomming}}>
      {children}
    </ContextMovie.Provider>
  )
} 

const useMovieContext = () =>{
  const {movieDbTrend, loadTrend, loadUpc , setTrendQuery, trendQuery, movieDbUpcomming}= useContext(ContextMovie)
  return {movieDbTrend, loadTrend, loadUpc, setTrendQuery, trendQuery, movieDbUpcomming}
}
export {routesList, ContextMovieProvided, useMovieContext}
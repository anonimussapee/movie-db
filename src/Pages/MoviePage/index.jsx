import { Outlet, useParams } from 'react-router-dom'
import { Layout, LayoutW90 } from '../../Components/Layout'
import { useEffect, useState } from 'react'
import { useMovieContext } from '../../Components/Context'
import { ContainerScrollX } from '../../Components/ContainerScrollX'
import { MovieCard } from '../../Components/MovieCard'

const MoviePage = () => {

  const useMovie = useMovieContext()
  const {movieId} = useParams()

  if(!movieId){
    return (
      <Layout>
        <section className='w-[40%] mx-auto flex flex-col gap-3 justify-center items-center '>
          {useMovie.loadPopular && useMovie?.movieDbTrend.results.map(movie=>{
            return <MovieCard movie={movie} key={movie.id}/>
          })}
        </section>
      </Layout>
    )
  }
  return (
    <Layout>
      
      <h1>movie page</h1>
      <Outlet/>
    </Layout>
  )
}

const MovieData = () => {

  const useMovie = useMovieContext()
  const {movieId} = useParams()
  // popular movie 
  const [movieFinded, setMovieFinded] = useState(null)
  const [loadFinded, setLoadFinded] = useState(false)

  if(movieId.length<6){return (<p>no existe este id</p>)}
  // este useEffect es para buscar peliculas por su id
  useEffect(()=>{

    console.log(movieId)
    try{ const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `${useMovie.API_KEY}`
        }
      };
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          console.log('movie finded by id ', json);
          setMovieFinded(json)  
          setLoadFinded(true)
        })
        .catch(err => console.error('error:' + err));}
    catch (error){
        console.log(error, 'no se hizo la fetch movie popular bro')
      }
  },[loadFinded])

  return (
    <>
      <div className='bg-gray-500 w-full h-[300px] img relative' style={{
        backgroundImage:`url(https://image.tmdb.org/t/p/w1000_and_h450_multi_faces/${movieFinded?.backdrop_path
        })`,
        backgroundPosition:'calc(105% - 100%) 0',
        backgroundSize: '200% '
      }}>
        <img src={`https://image.tmdb.org/t/p/w300${movieFinded?.poster_path}`} alt="" className='w-[200px] h-[250px] img absolute top-[25px] left-4 rounded-xl border-[4px] border-[#ffffff59]' />
      </div>
    </>
  )
}

export {MoviePage, MovieData}
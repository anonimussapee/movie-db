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
      <Outlet/>
    </Layout>
  )
}

const MovieData = () => {

  const useMovie = useMovieContext()
  const {movieId} = useParams()
  //  movie 
  const [movieFinded, setMovieFinded] = useState(null)
  const [loadFinded, setLoadFinded] = useState(false)
  // movie trailer
  const [movieTrailer, setMovieTrailer] = useState(null)
  const [loadTrailer, setLoadTrailer] = useState(false)
  

  if(movieId.length<6){return (<p>no existe este id</p>)}
  // este useEffect es para buscar peliculas por su id
  useEffect(()=>{

    try{ const url = `https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`;
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
          setMovieFinded(json)  
          setLoadFinded(true)

        const Trailer = `https://api.themoviedb.org/3/movie/${json.id}/videos?language=en-US`;


        fetch(Trailer, options)
          .then(res => res.json())
          .then(video => {
            console.log(video)
            
            setMovieTrailer(video)
            setLoadTrailer(true)
          })
          .catch(errorTrailer => console.error('error:' + errorTrailer));

        })
        .catch(err => console.error('error:' + err));}
    catch (error){
        console.log(error, 'no se hizo la fetch movie popular bro')
      }
  },[loadFinded])

  return (
   loadFinded && <div className='w-full '>
      <div className=' w-full smMax:h-[300px] lgMin:h-[400px] img relative' style={{
        backgroundImage:`url(https://image.tmdb.org/t/p/w1000_and_h450_multi_faces/${movieFinded?.backdrop_path
        })`,
        backgroundPosition:'0px 0px',
        backgroundSize: '150% 100% '
      }}>
        <img src={`https://image.tmdb.org/t/p/w300${movieFinded?.poster_path}`} alt="" className='smMax:w-[180px] smMax:h-[250px] lgMin:w-[240px] lgMin:h-[350px] img absolute bottom-[15px] left-4 rounded-xl border-[4px] border-[#ffffff59]' />
      </div>
      <div className='w-full h-auto flex flex-col gap-3 p-3 justify-center'>
        <h1 className='text-[22.5px] font-extrabold text-center'>{movieFinded?.title}<p className='font-normal inline'>({movieFinded?.release_date.substring(0,4)})</p></h1>
        <div className=' flex  gap-5 w-full h-[40px] '>
          <div className='w-[50%] h-auto  flex gap-2 justify-center items-center'>
            <span className='border-[2px] text-white font-extrabold border-[#144552] bg-[#26dee1] w-14 h-11 rounded-full flex justify-center items-center'>{(movieFinded?.vote_average * 10).toFixed(0)}%</span>
            <p className='font-bold line-heigth-1'>Puntuación de usuario</p> 
          </div>
          { 
            loadTrailer &&   <a href={`https://www.youtube.com/watch?v=${movieTrailer?.results[0]?.key}`} target='_blank'> ver trailer</a>
          }
        </div>
      </div>
      {/* <iframe className='fixed ' width="560" height="315" src={`https://www.youtube.com/watch?v=${movieTrailer?.results?.key} `}title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  )
}

export {MoviePage, MovieData}
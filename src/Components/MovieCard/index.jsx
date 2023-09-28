import './index.css'
const MovieCard = ({movie}) => {
  return (
    <article className='MovieCard flex flex-col gap-5 '>
    <div className='w-[160px] h-[220px] relative '>
      <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`} alt={movie?.title} className='rounded-lg w-[160px] h-[220px]'/>                
      <span className='border-[2px] text-white font-extrabold border-[#144552] bg-[#26dee1] w-11 h-11 rounded-full absolute -bottom-3 left-2 flex justify-center items-center'>{movie?.vote_average * 10}%</span>
    </div>
    <div >
      <a href="#">
        <h2 className='font-extrabold'>{movie?.title}</h2>
      </a>
      <p className='text-[#474747]'>{movie?.release_date}</p>
    </div>
  </article>
  )
}

export {MovieCard}
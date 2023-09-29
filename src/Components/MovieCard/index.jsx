import './index.css'
const MovieCard = ({movie, dateColor}) => {

  let fecha = new Date(movie.release_date);

  // Días de la semana y meses en español
  let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  // Obtener el día, nombre del mes y año
  let dia = fecha.getDate();
  let nombreMes = meses[fecha.getMonth()];
  let año = fecha.getFullYear();


  // Construir la fecha en el formato deseado
  let fechaFormateada = `${dia} ${nombreMes.substring(0,3)} ${año}`;

  return (
    <article className='MovieCard flex flex-col gap-5 '>
    <div className='w-[160px] h-[220px] relative '>
      <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`} alt={movie?.title} className='rounded-lg w-[160px] h-[220px]'/>                
      <span className='border-[2px] text-white font-extrabold border-[#144552] bg-[#26dee1] w-11 h-11 rounded-full absolute -bottom-3 left-2 flex justify-center items-center'>{(movie?.vote_average * 10).toFixed(0)}%</span>
    </div>
    <div >
      <a href="#">
        <h2 className='font-extrabold line-clamp-2'>{movie?.title}</h2>
      </a>
      <p className={dateColor || `text-[#474747]`}>{fechaFormateada}</p>
    </div>
  </article>
  )
}

export {MovieCard}
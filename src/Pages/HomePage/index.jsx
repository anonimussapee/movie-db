import { useState } from 'react'
import { Layout, LayoutW90 } from '../../Components/Layout'
import './index.css'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MovieCard } from '../../Components/MovieCard'
import { useMovieContext } from '../../Components/Context'

const HomePage = () => {

  const useMovie = useMovieContext()
  const [searchValue, setSearchValue] = useState('')
  const [opList, setOpList] = useState({tendencias:false, popular:false})


  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleTrendOpen = () => {
    setOpList({...opList, tendencias:!opList.tendencias})
  }

  return (
    <Layout>
      <div className='w-[100%] h-[360px] relative '>
       <div className='first-bg img absolute'></div>
       <div className='w-full h-[360px] bg-[#14455289] absolute  text-white flex flex-col p-5 justify-between'>
          <h2 className='text-[42px] font-extrabold'>Bienvenidos.</h2>
          <h3 className='text-[32px] font-bold line-heigth-1'>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
          <form  onSubmit={handleSubmit} className='flex mt-2 bg-white rounded-full overflow-hidden'>
            <label htmlFor="searchBox" className='flex-grow'>
              <input type="text" name='seatchBox' id='searchBox'  placeholder='Búsqueda...' autoCorrect='off' autoComplete='off' value={searchValue} onChange={e=>setSearchValue(e.target.value)} className='text-[#242424] p-3 px-4 placeholder:text-[#535353] outline-none'/>
            </label>
            <button type='submit' className=' font-semibold py-3 px-5 bg-[#26dee1] rounded-full '>Buscar</button>

          </form>
       </div>
      </div>
      {/* lista de tendencia */}
      <LayoutW90>
        <div className='w-full h-12 mt-2  z-10 relative'>
          <div className='absolute flex gap-5  '>
            <h2 className='text-[24px]  '>Tendencias</h2>
            <div className={`w-[150px]  ${opList.tendencias ? ' h-auto ' : 'h-[36px]'} rounded-xl bg-[#26dee1] border-[1px] border-[#144552]  overflow-hidden ` }>
              {(useMovie.trendQuery.today && 
              (
              <>
                <h3 className='bg-[#144552] text-[#26dee1] p-1 px-3 font-semibold rounded-xl' onClick={handleTrendOpen}>Hoy <ChevronDownIcon className='w-6 h-6 text-white inline'/></h3>
                <h3 className='bg-[#26dee1] text-[#144552] p-1 px-3 font-semibold' onClick={()=>{useMovie.setTrendQuery({day: false , week: true })}}>Esta semana</h3>
              </>
              ) ) || ( useMovie.trendQuery.week && (
              <>
                <h3 className='bg-[#144552] text-[#26dee1] p-1 px-3 font-semibold rounded-xl' onClick={handleTrendOpen}>Esta semana <ChevronDownIcon className='w-6 h-6 text-white inline'/></h3>
                <h3 className='bg-[#26dee1] text-[#144552] p-1 px-3 font-semibold ' onClick={()=>{useMovie.setTrendQuery({day: true , week: false })}}>Hoy</h3>
              </>
              )) }

            </div>
          </div>

        </div>
        <div className='w-[100%] h-auto scroll-x-container flex gap-3 '>
          {useMovie.loadTrend && useMovie.movieDbTrend?.results.map(movie =>{
            return <MovieCard key={movie.id} movie={movie}/>
          })}
        </div>
      </LayoutW90>
      {/* lista de ultimos avances trailers */}
      <LayoutW90>
      <h2 className='text-[24px]  '>Estrenos</h2>        
        <div className='w-[100%]  scroll-x-container flex gap-3 '>
          {useMovie.loadUpc && useMovie.movieDbUpcomming?.results.map(movie =>{
            return <MovieCard key={movie.id} movie={movie}/>
          })}
        </div>  
      </LayoutW90>
    </Layout>
  )
}

export {HomePage}
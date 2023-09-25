import { Link } from 'react-router-dom'
import { routesList } from '../Context'

const NavBar = () => {
  const listRendered = {}

  return (
    <nav className='w-full h-[100px]'>
      <ul className='flex gap-10'>
        {routesList.map((route, index)=>{
          
          if(!listRendered[route.title]){
            listRendered[route.title] = true
            return (
            <li key={index}>
              <Link to={route.path} >
                {route.title}
              </Link>
            </li>)

                      
          }

        })}
      </ul>
    </nav>
  )
}

export {NavBar}
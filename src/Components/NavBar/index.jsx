import {  NavLink } from 'react-router-dom'
import { routesList } from '../Context'
import { useState } from 'react'
import {Bars3Icon, BellIcon, MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/20/solid'
import './index.css'
import themoviedb from '../../assets/Tmdblogo.png'

const NavBar = () => {
  const listRendered = {}

  const [openBar, setOpenBar] = useState (false)

  return (
    <nav className='w-full h-[64px] bg-[#144552] flex items-center px-5 text-white justify-between'>
      <ul className='flex gap-10  h-[inherit] items-center'>
        <li onClick={()=>setOpenBar(!openBar)}>
          <Bars3Icon className='w-6 xlMin:hidden'/>
        </li>
      </ul>
      <ul  className='flex gap-5 h-[inherit] items-center '>
        <li>
          <img src={themoviedb} alt="The moviedb logo" className='h-[40px] mr-2' />
        </li>
        <li>
          <BellIcon className='w-6'/>
        </li>
        <li>
          <UserCircleIcon className='w-8'/>
        </li>
        <li>
          <MagnifyingGlassIcon className='w-6 text-[#26dee1]'/>
        </li>
      </ul>
      <ul className={`navSide flex gap-10 w-[320px] lgMax:visible xlMin:hidden absolute top-[64px] bottom-0 ${openBar ? 'Active':''}  bg-[#144552]  p-5 z-50`} >
        {routesList.map((route, index)=>{
          
          if(!listRendered[route.title]){
            listRendered[route.title] = true
            return (
            <li key={index}>
              <NavLink to={route.path} className={({isActive})=> isActive ? 'underline-offset-4 underline': ''}>
                {route.title}
              </NavLink>
            </li>)

                      
          }

        })}
      </ul>
    </nav>
  )
}

export {NavBar}
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextMovieProvided, routesList } from '../../Components/Context'
import { NavBar } from '../../Components/NavBar'
import './App.css'
import { Footer } from '../../Components/Footer'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <ContextMovieProvided>
          <Routes>
            {routesList.map((route, index) => {
              return (<Route key={index} path={route.path} element={route.renderElement} > {route.nesting.nest && route.nesting.list.map((routeItem, index)=>(<Route key={index+'nest'} path={routeItem.path} element={routeItem.renderElement} />))}</Route>)
            })}
          </Routes>
      </ContextMovieProvided>
      <Footer/>
    </BrowserRouter>
  )
}

export {App}
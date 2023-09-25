import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesList } from '../../Components/Context'
import { NavBar } from '../../Components/NavBar'


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {routesList.map((route, index) => {
          return (<Route key={index} path={route.path} element={route.renderElement} > {route.nesting.nest && (<Route path={route.nesting?.path} element={route.nesting?.renderElement} />)}</Route>)
        })}
      </Routes>
    </BrowserRouter>
  )
}

export {App}

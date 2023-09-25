import { HomePage } from '../../Pages/HomePage'


const routesList = [
  {path: '/', title: 'Home' , renderElement : (<HomePage/>) , private: false, nesting:{nest:false,} },
  {path:'/home', title: 'Home' , renderElement : (<HomePage/>) , private: false, nesting:{nest:false,}  },

]

export {routesList}
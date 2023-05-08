import { createRouter } from '../core/heropy'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter([
  { path: '#/', component: Home, name: '' },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  // 앞에서 걸러지지 못한(?) 모든 페이지 = 잘못된 페이지
  { path: '.*', component: NotFound },
])
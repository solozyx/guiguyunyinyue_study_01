
import Home from '../components/Home/Home'
import Personal from '../components/Personal/Personal'
import Cart from '../components/Cart/Cart'


export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/personal/:id',
    component: Personal,
    name: 'personal'
  },
  {
    path: '/cart',
    component: Cart,
    name: 'cart'
  },
  {
    path: '/',
    redirect: '/home'
  }
]

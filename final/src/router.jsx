import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Blog from './containers/Blog'
import NotFound from './containers/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about', // => /about
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'post/:id',
        element: <Blog />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ],
  },
])

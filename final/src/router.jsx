import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import {
  Home,
  About,
  Contact,
  Post,
  Test,
  NotFound,
  AddPost,
} from './containers';

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
        element: <Post />,
        children: [
          {
            path: 'test',
            element: <Test />,
          },
        ],
      },
      {
        path: '/add-post',
        element: <AddPost />,
      },
      {
        path: '*',
        element: <NotFound />
      },
    ],
  },
])

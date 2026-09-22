import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import {
  Home,
  About,
  Contact,
  Post,
  NotFound,
  AddPost,
  Category,
  Registration,
} from './containers';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'category/:catName',
          element: <Category />
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
        },
        {
          path: '/add-post',
          element: <AddPost />,
        },
        {
          path: '/register',
          element: <Registration />,
        },
        {
          path: '*',
          element: <NotFound />
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  },
)

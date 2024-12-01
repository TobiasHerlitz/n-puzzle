import { Landing, NotFound, RoutingRoot } from '@routes';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RoutingRoot />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
      {
        path: 'n-puzzle',
        element: <Landing />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

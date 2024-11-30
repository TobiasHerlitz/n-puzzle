import './style/global.css';

import { PuzzleProvider } from '@state';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

export const App = () => {
  return (
    <PuzzleProvider>
      <RouterProvider router={router} />
    </PuzzleProvider>
  );
};

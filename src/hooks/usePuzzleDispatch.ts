import { PuzzleDispatchContext } from '@state';
import { useContext } from 'react';

export function usePuzzleDispatch() {
  const context = useContext(PuzzleDispatchContext);
  if (!context) {
    throw Error('Context has not been Provided!');
  }

  return context;
}

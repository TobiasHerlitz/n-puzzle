import { PuzzleContext } from '@state';
import { useContext } from 'react';

export function usePuzzleState() {
  return useContext(PuzzleContext);
}

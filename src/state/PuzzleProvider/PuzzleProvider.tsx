import { ReactNode, useReducer } from 'react';

import { PuzzleContext } from './PuzzleContext';
import { PuzzleDispatchContext } from './PuzzleDispatchContext';
import { puzzleInitialState } from './puzzleInitialState';
import { puzzleReducer } from './puzzleReducer';

interface PuzzleProviderProps {
  children: ReactNode;
}

export const PuzzleProvider = ({ children }: PuzzleProviderProps) => {
  const [puzzleConfig, dispatch] = useReducer(
    puzzleReducer,
    puzzleInitialState
  );
  return (
    <PuzzleContext.Provider value={puzzleConfig}>
      <PuzzleDispatchContext.Provider value={dispatch}>
        {children}
      </PuzzleDispatchContext.Provider>
    </PuzzleContext.Provider>
  );
};

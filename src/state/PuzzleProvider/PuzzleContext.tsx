import { createContext } from 'react';

import { puzzleInitialState } from './puzzleInitialState';

export type PuzzleState = object;

export const PuzzleContext = createContext<PuzzleState>(puzzleInitialState);

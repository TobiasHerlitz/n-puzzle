import { createContext, Dispatch } from 'react';

// Actions
interface PlaceholderAction {
  type: 'placeholderAction';
}

export type PuzzleActions = PlaceholderAction;

export const PuzzleDispatchContext =
  createContext<Dispatch<PuzzleActions> | null>(null);

import { PuzzleState } from './PuzzleContext';
import { PuzzleActions } from './PuzzleDispatchContext';

export function puzzleReducer(
  state: PuzzleState,
  action: PuzzleActions
): PuzzleState {
  switch (action.type) {
    case 'placeholderAction': {
      return { ...state };
    }
    default: {
      throw Error('Unknown action in puzzleReducer');
    }
  }
}

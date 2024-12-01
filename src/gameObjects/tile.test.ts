import { Board, Tile } from '@gameObjects';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Tile', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board({ width: 3, height: 3 });
  });

  describe('shift', () => {
    it('should shift itself', () => {
      board.slots = [
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        null,
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      const expectedSlots = [
        new Tile({ value: 6, board }),
        null,
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      board.slots[1]?.shift();
      expect(board.slots).toEqual(expectedSlots);
    });
  });

  describe('isShiftable', () => {
    it('should return true if on the same row', () => {
      board.slots = [
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        null,
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      expect(board.slots[1]?.isShiftable()).toEqual(true);
    });

    it('should return true if in the same column', () => {
      board.slots = [
        new Tile({ value: 6, board }),
        null,
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      expect(board.slots[7]?.isShiftable()).toEqual(true);
    });

    it('should return false if not in the same column or row', () => {
      board.slots = [
        new Tile({ value: 6, board }),
        null,
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      expect(board.slots[6]?.isShiftable()).toEqual(false);
    });
  });
});

import { Board, Tile } from '@gameObjects';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Board', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board({ width: 3, height: 3 });
  });

  describe('constructor', () => {
    it('should initialize with the correct number of slots', () => {
      expect(board.slots.length).toBe(9);
      expect(board.slots.filter((slot) => slot === null).length).toBe(1);
      expect(board.slots.filter((slot) => slot instanceof Tile).length).toBe(8);
    });

    it('should contain tile values 1 to 8 and a null value', () => {
      const slotValues = board.slots.map((slot) =>
        slot instanceof Tile ? slot.value : slot
      );
      const expectedValues = [1, 2, 3, 4, 5, 6, 7, 8, null];
      expectedValues.forEach((expectedValue) => {
        expect(slotValues.includes(expectedValue)).toBe(true);
      });
    });

    it('should initialize a 5x9 board with the correct number of slots', () => {
      const unevenBoard = new Board({ width: 5, height: 9 });
      expect(unevenBoard.slots.length).toBe(45);
      expect(unevenBoard.slots.filter((slot) => slot === null).length).toBe(1);
      expect(
        unevenBoard.slots.filter((slot) => slot instanceof Tile).length
      ).toBe(44);
    });
  });

  describe('isSolved', () => {
    it('should return true for a solved board', () => {
      board.setSlots([
        new Tile({ value: 1, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 6, board }),
        new Tile({ value: 7, board }),
        new Tile({ value: 8, board }),
        null,
      ]);

      expect(board.isSolved()).toBe(true);
    });

    it('should return false non-solved board', () => {
      board.setSlots([
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        null,
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ]);
      expect(board.isSolved()).toBe(false);
    });
  });

  describe('shuffle', () => {
    it('should shuffle the board slots', () => {
      const initialSlots = [...board.slots];
      board.shuffle();
      expect(board.slots).not.toEqual(initialSlots);
    });
  });

  describe('shiftTiles', () => {
    it('should shift one tile left', () => {
      board.setSlots([
        new Tile({ value: 6, board }),
        null,
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ]);

      const expectedSlots = [
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

      board.shiftTiles(board.slots[2] as Tile);
      expect(board.slots).toEqual(expectedSlots);
    });

    it('should shift one tile right', () => {
      board.setSlots([
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        null,
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ]);

      const expectedSlots = [
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        null,
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      board.shiftTiles(board.slots[4] as Tile);
      expect(board.slots).toEqual(expectedSlots);
    });

    it('should shift one tile up', () => {
      board.setSlots([
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        null,
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ]);

      const expectedSlots = [
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        null,
        new Tile({ value: 7, board }),
      ];

      board.shiftTiles(board.slots[7] as Tile);
      expect(board.slots).toEqual(expectedSlots);
    });

    it('should shift one tile down', () => {
      board.setSlots([
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        null,
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ]);

      const expectedSlots = [
        new Tile({ value: 6, board }),
        null,
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      board.shiftTiles(board.slots[1] as Tile);
      expect(board.slots).toEqual(expectedSlots);
    });

    it('should shift two tiles left', () => {
      board.setSlots([
        null,
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ]);

      const expectedSlots = [
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

      board.shiftTiles(board.slots[2] as Tile);
      expect(board.slots).toEqual(expectedSlots);
    });

    it('should shift two tiles up', () => {
      board.setSlots([
        null,
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ]);

      const expectedSlots = [
        new Tile({ value: 5, board }),
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        null,
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      board.shiftTiles(board.slots[6] as Tile);
      expect(board.slots).toEqual(expectedSlots);
    });

    it('should do nothing if attempting to shift a tile is unshiftable', () => {
      const initialSlots = [
        null,
        new Tile({ value: 6, board }),
        new Tile({ value: 1, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 8, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 7, board }),
      ];

      board.setSlots([...initialSlots]);
      board.shiftTiles(board.slots[4] as Tile);
      expect(board.slots).toEqual(initialSlots);
    });
  });

  describe('cheat', () => {
    it('should set the board to be one move away from solving', () => {
      board.cheat();

      const expectedSlots = [
        new Tile({ value: 1, board }),
        new Tile({ value: 2, board }),
        new Tile({ value: 3, board }),
        new Tile({ value: 4, board }),
        new Tile({ value: 5, board }),
        new Tile({ value: 6, board }),
        new Tile({ value: 7, board }),
        null,
        new Tile({ value: 8, board }),
      ];

      expect(board.slots).toEqual(expectedSlots);
    });
  });

  describe('getCoordinate', () => {
    it('should return the correct coordinates for a given slot', () => {
      const slot = board.slots[4];
      const coordinates = board.getCoordinate(slot);

      expect(coordinates).toEqual({ x: 2, y: 2 });
    });

    it('should throw an error if the slot is not found', () => {
      const nonExistentTile = new Tile({ value: 999, board });

      expect(() => board.getCoordinate(nonExistentTile)).toThrow(
        'Could not find index'
      );
    });
  });
});

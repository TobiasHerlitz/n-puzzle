import { shuffle } from 'lodash-es';
import { makeObservable, observable } from 'mobx';

import { Tile } from './tile';

interface BoardArgs {
  width: number;
  height: number;
}

export class Board {
  slots: (Tile | null)[];
  width: number;

  constructor({ width, height }: BoardArgs) {
    this.width = width;
    const tileCount = width * height - 1;
    const tiles = Array.from(
      { length: tileCount },
      (_, i) => new Tile({ value: i + 1, board: this })
    );

    this.slots = [...tiles, null];
    this.shuffle();
    makeObservable(this, { slots: observable });
  }

  isSolved() {
    return this.slots.every((slot, index) => {
      if (slot?.value === index + 1) {
        return true;
      }

      if (index + 1 === this.slots.length && slot === null) {
        return true;
      }

      return false;
    });
  }

  shiftTiles(tile: Tile) {
    const tileCoordinates = this.getCoordinate(tile);
    const gapCoordinates = this.getCoordinate(null);
    const tileIndex = this.slots.indexOf(tile);
    const gapIndex = this.slots.indexOf(null);

    // Shift horizontally
    if (tileCoordinates.y === gapCoordinates.y) {
      // Shift right
      if (tileCoordinates.x < gapCoordinates.x) {
        const affectedSlots = this.slots.slice(tileIndex, gapIndex + 1);
        affectedSlots.unshift(null);
        affectedSlots.pop();
        this.slots.splice(tileIndex, affectedSlots.length, ...affectedSlots);
        return;
      }

      // Shift left
      const affectedSlots = this.slots.slice(gapIndex, tileIndex + 1);
      affectedSlots.push(null);
      affectedSlots.shift();
      this.slots.splice(gapIndex, affectedSlots.length, ...affectedSlots);
      return;
    }

    // Shift vertically
    if (tileCoordinates.x === gapCoordinates.x) {
      // Shift up
      if (tileCoordinates.y > gapCoordinates.y) {
        const tileCount = tileCoordinates.y - gapCoordinates.y;
        for (let rowOffset = 0; rowOffset < tileCount; rowOffset++) {
          this.slots[gapIndex + rowOffset * this.width] =
            this.slots[gapIndex + (rowOffset + 1) * this.width];
          this.slots[gapIndex + (rowOffset + 1) * this.width] = null;
        }
      }

      // Shift down
      const tileCount = gapCoordinates.y - tileCoordinates.y;
      for (let rowOffset = 0; rowOffset < tileCount; rowOffset++) {
        this.slots[gapIndex - rowOffset * this.width] =
          this.slots[gapIndex - (rowOffset + 1) * this.width];
        this.slots[gapIndex - (rowOffset + 1) * this.width] = null;
      }
    }
  }

  shuffle() {
    this.slots = shuffle(this.slots);
  }

  /**
   * Sets the board up so that its only one move away from solving the puzzle.
   * Might be useful during the review so I'll keep it.
   */
  cheat() {
    const slots: (Tile | null)[] = Array.from(
      { length: this.slots.length - 1 },
      (_, i) => new Tile({ value: i + 1, board: this })
    );
    const lastTile = slots.pop();
    slots.push(null, lastTile || null);
    this.slots = slots;
  }

  getCoordinate(slot: Tile | null) {
    const index = this.slots.indexOf(slot);
    if (index === -1) {
      throw new Error('Could not find index');
    }

    const x = (index % this.width) + 1;
    const y = Math.floor(index / this.width) + 1;
    return { x, y };
  }
}

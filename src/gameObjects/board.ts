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

  shiftTile(tile: Tile) {
    // TODO: Should be able to click rows and column and shift all
    const tileIndex = this.slots.indexOf(tile);

    const canRight =
      tileIndex % this.width !== this.width - 1 &&
      this.slots[tileIndex + 1] === null;
    if (canRight) {
      this.slots[tileIndex] = null;
      this.slots[tileIndex + 1] = tile;
      return;
    }

    const canLeft =
      tileIndex % this.width !== this.width &&
      this.slots[tileIndex - 1] === null;
    if (canLeft) {
      this.slots[tileIndex] = null;
      this.slots[tileIndex - 1] = tile;
      return;
    }

    const canUp =
      tileIndex >= this.width && this.slots[tileIndex - this.width] === null;
    if (canUp) {
      this.slots[tileIndex] = null;
      this.slots[tileIndex - this.width] = tile;
      return;
    }

    const canDown =
      tileIndex <= this.slots.length - this.width &&
      this.slots[tileIndex + this.width] === null;
    if (canDown) {
      this.slots[tileIndex] = null;
      this.slots[tileIndex + this.width] = tile;
    }
  }

  shuffle() {
    this.slots = shuffle(this.slots);
  }
}

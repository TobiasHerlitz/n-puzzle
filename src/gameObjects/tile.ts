import { Board } from './board';

interface TileArgs {
  value: number;
  board: Board;
}

export class Tile {
  value: number;
  board: Board;

  constructor({ value, board }: TileArgs) {
    this.value = value;
    this.board = board;
  }

  shift() {
    if (!this.isShiftable()) {
      return;
    }

    this.board.shiftTiles(this);
  }

  isShiftable() {
    const tileCoordinates = this.board.getCoordinate(this);
    const gapCoordinates = this.board.getCoordinate(null);

    return (
      tileCoordinates.x === gapCoordinates.x ||
      tileCoordinates.y === gapCoordinates.y
    );
  }
}

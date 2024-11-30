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
    this.board.shiftTile(this);
  }
}

import { Tile } from '@components';
import { Board as BoardEntity, Tile as TileEntity } from '@gameObjects';
import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';

import styles from './Board.module.css';

interface BoardProps {
  boardEntity: BoardEntity;
}

export const Board = observer(({ boardEntity }: BoardProps) => {
  return (
    <div
      className={styles.puzzleBoard}
      style={{ gridTemplateColumns: `repeat(${boardEntity.width}, 1fr)` }}
    >
      {boardEntity.slots.map((slot) => (
        <Fragment key={slot?.value ?? 'gap'}>
          {slot instanceof TileEntity ? <Tile tileEntity={slot} /> : <div />}
        </Fragment>
      ))}
    </div>
  );
});

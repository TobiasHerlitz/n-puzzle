import { Board, CelebrationOverlay, Controls } from '@components';
import { BOARD_HEIGHT, BOARD_WIDTH } from '@consts';
import { Board as BoardEntity } from '@gameObjects';

import styles from './Landing.module.css';

const boardEntity = new BoardEntity({
  width: BOARD_WIDTH,
  height: BOARD_HEIGHT,
});

export const Landing = () => {
  return (
    <div className={styles.landing}>
      <Board boardEntity={boardEntity} />
      <Controls boardEntity={boardEntity} />
      <CelebrationOverlay boardEntity={boardEntity} />
    </div>
  );
};

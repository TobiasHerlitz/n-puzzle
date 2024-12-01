import { Board as BoardEntity } from '@gameObjects';
import { observer } from 'mobx-react-lite';

import styles from './Controls.module.css';

interface ControlsProps {
  boardEntity: BoardEntity;
}

export const Controls = observer(({ boardEntity }: ControlsProps) => {
  return (
    <div className={styles.controls}>
      <button
        disabled={boardEntity.isSolved()}
        onClick={() => boardEntity.cheat()}
      >
        Fuska
      </button>
      <button onClick={() => boardEntity.shuffle()}>Slumpa</button>
    </div>
  );
});

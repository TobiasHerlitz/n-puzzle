import { Board as BoardEntity } from '@gameObjects';
import { observer } from 'mobx-react-lite';
import ConfettiExplosion from 'react-confetti-explosion';

import amazingGIF from '@assets/amazing.gif';
import styles from './CelebrationOverlay.module.css';

interface CelebrationOverlayProps {
  boardEntity: BoardEntity;
}

export const CelebrationOverlay = observer(
  ({ boardEntity }: CelebrationOverlayProps) => {
    if (!boardEntity.isSolved()) {
      return null;
    }

    return (
      <div className={styles.celebrationOverlay}>
        <ConfettiExplosion />
        <h1>YOU DID IT!!!</h1>
        <img src={amazingGIF} alt="You are amazing" />
        <button onClick={() => boardEntity.shuffle()}>Again!</button>
      </div>
    );
  }
);

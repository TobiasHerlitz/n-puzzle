import { Tile as TileEntity } from '@gameObjects';

import styles from './Tile.module.css';

interface TileProps {
  tileEntity: TileEntity;
}

export const Tile = ({ tileEntity }: TileProps) => {
  return <div className={styles.tile}>{tileEntity.value}</div>;
};

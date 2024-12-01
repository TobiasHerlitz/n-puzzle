import { Tile as TileEntity } from '@gameObjects';

import styles from './Tile.module.css';

interface TileProps {
  tileEntity: TileEntity;
}

export const Tile = ({ tileEntity }: TileProps) => {
  const isShiftable = tileEntity.isShiftable();

  const tileClasses = [
    styles.tile,
    ...(isShiftable ? [styles.clickable] : []),
  ].join(' ');

  return (
    <div
      className={tileClasses}
      onClick={isShiftable ? () => tileEntity.shift() : undefined}
    >
      {tileEntity.value}
    </div>
  );
};

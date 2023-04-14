import React from 'react';
import styles from './controls.scss';
import { IKarmaCounterProps, KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';

export type IControlsProps = IKarmaCounterProps;

export function Controls({ score }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score} />
      <CommentsButton />

      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}

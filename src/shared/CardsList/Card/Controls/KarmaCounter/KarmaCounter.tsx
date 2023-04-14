import React from 'react';
import styles from './karmacounter.scss';
import { EIcons, Icon } from '../../../../Icon';
import { EColors } from '../../../../enums';
import { Text } from '../../../../Text';

export interface IKarmaCounterProps {
  score: string;
  className?: string;
}

export function KarmaCounter({ score }: IKarmaCounterProps) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon
          name={EIcons.arrowUp}
          size={19}
          fill={EColors.greyD9}
          mobileFill={EColors.greyC4}
        />
      </button>

      <Text size={14} mobileSize={12} mobileColor={EColors.greyC4}>
        {score}
      </Text>

      <button className={styles.down}>
        <Icon
          name={EIcons.arrowDown}
          size={19}
          fill={EColors.greyD9}
          mobileFill={EColors.greyC4}
        />
      </button>
    </div>
  );
}

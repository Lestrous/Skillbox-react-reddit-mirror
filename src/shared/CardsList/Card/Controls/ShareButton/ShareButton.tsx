import React from 'react';
import styles from './sharebutton.scss';
import { EColors } from '../../../../enums';
import { EIcons, Icon } from '../../../../Icon';

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <Icon
        name={EIcons.shareCircle}
        size={20}
        fill={EColors.white}
        circleFill={EColors.greyC4}
      />
    </button>
  );
}

import React from 'react';
import styles from './savebutton.scss';
import { EIcons, Icon } from '../../../../Icon';
import { EColors } from '../../../../enums';

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
      <Icon
        name={EIcons.saveCircle}
        size={20}
        fill={EColors.white}
        circleFill={EColors.greyC4}
      />
    </button>
  );
}

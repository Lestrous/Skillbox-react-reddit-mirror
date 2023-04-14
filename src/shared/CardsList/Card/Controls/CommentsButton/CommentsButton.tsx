import React from 'react';
import styles from './commentsbutton.scss';
import { Text } from '../../../../Text';
import { EIcons, Icon } from '../../../../Icon';
import { EColors } from '../../../../enums';

export function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <Icon name={EIcons.comments} size={15} fill={EColors.greyC4} />
      <Text className={styles.commentsNumber} size={12}>
        13
      </Text>
    </button>
  );
}

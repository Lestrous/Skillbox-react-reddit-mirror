import React from 'react';
import styles from './menuitemslist.scss';
import { Text } from '../../../../Text';
import { EColors } from '../../../../enums';
import { EIcons, Icon } from '../../../../Icon';

export interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={`${styles.menuItem} mobile_hidden`}>
        <Icon name={EIcons.comments} size={15} fill={EColors.grey99} />
        <Text size={14} color={EColors.grey99}>
          Комментарии
        </Text>
      </li>

      <div className={`${styles.divider} mobile_hidden`} />

      <li className={`${styles.menuItem} mobile_hidden`}>
        <Icon name={EIcons.share} size={14} fill={EColors.grey99} />
        <Text size={14} color={EColors.grey99}>
          Поделиться
        </Text>
      </li>

      <div className={`${styles.divider} mobile_hidden`} />

      <li className={styles.menuItem}>
        <Icon
          name={EIcons.block}
          size={14}
          mobileSize={12}
          fill={EColors.grey99}
        />
        <Text size={14} mobileSize={12} color={EColors.grey99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={`${styles.menuItem} mobile_hidden`}>
        <Icon name={EIcons.save} size={14} fill={EColors.grey99} />
        <Text size={14} color={EColors.grey99}>
          Сохранить
        </Text>
      </li>

      <div className={`${styles.divider} mobile_hidden`} />

      <li className={styles.menuItem}>
        <Icon
          name={EIcons.warning}
          size={16}
          mobileSize={14}
          fill={EColors.grey99}
        />
        <Text size={14} mobileSize={12} color={EColors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}

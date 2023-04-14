import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
import { IMenuItemsListProps, MenuItemsList } from './MenuItemsList';
import { Text } from '../../../Text';
import { EColors } from '../../../enums';
import { EIcons, Icon } from '../../../Icon';

export type IMenuProps = IMenuItemsListProps;

export function Menu({ postId }: IMenuProps) {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <Icon name={EIcons.menu} size={20} fill={EColors.greyD9} />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId={postId} />
          <button className={`${styles.closeButton} desktop_hidden`}>
            <Text size={14} mobileSize={12} color={EColors.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}

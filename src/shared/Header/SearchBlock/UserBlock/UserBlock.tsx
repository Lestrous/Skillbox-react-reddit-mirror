import React from 'react';
import styles from './userblock.scss';
import { EIcons, Icon } from '../../../Icon';
import { EColors } from '../../../enums';
import { Break } from '../../../Break';
import { Text } from '../../../Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <Icon name={EIcons.anon} size={50} fill={EColors.greyD9} />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />

        {loading ? (
          <Text size={20} color={EColors.grey99}>
            Загрузка...
          </Text>
        ) : (
          <Text size={20} color={username ? EColors.black : EColors.grey99}>
            {username || 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  );
}

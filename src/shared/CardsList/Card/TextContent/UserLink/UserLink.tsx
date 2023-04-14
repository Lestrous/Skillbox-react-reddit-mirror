import React from 'react';
import styles from './userlink.scss';

export interface IUserLinkProps {
  username: string;
  userUrl?: string;
  avatarSrc?: string;
}

export function UserLink({ username, userUrl, avatarSrc }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={
          avatarSrc ?? 'https://avatars.githubusercontent.com/u/47781960?v=4'
        }
        alt="avatar"
      />
      <a href={userUrl ?? '#user-url'} className={styles.username}>
        {username ?? 'Дмитрий Гришин'}
      </a>
    </div>
  );
}

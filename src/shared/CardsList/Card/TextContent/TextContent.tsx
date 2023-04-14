import React from 'react';
import styles from './textcontent.scss';
import { ITitleProps, Title } from './Title';
import { IUserLinkProps, UserLink } from './UserLink';

export interface ITextContentProps extends IUserLinkProps, ITitleProps {
  published?: string;
}

export function TextContent({
  postId,
  subreddit,
  username,
  title,
  userUrl,
  avatarSrc,
  published,
}: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink username={username} userUrl={userUrl} avatarSrc={avatarSrc} />

        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {published ?? '4 часа назад'}
        </span>
      </div>

      <Title postId={postId} subreddit={subreddit} title={title} />
    </div>
  );
}

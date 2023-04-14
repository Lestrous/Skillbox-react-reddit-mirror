import React from 'react';
import styles from './card.scss';
import { ITextContentProps, TextContent } from './TextContent';
import { IPreviewProps, Preview } from './Preview';
import { IMenuProps, Menu } from './Menu';
import { Controls, IControlsProps } from './Controls';

export interface ICardProps
  extends ITextContentProps,
    IPreviewProps,
    IMenuProps,
    IControlsProps {}

export function Card({
  postId,
  subreddit,
  username,
  title,
  userUrl,
  avatarSrc,
  published,
  previewSrc,
  score,
}: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent
        postId={postId}
        subreddit={subreddit}
        username={username}
        title={title}
        userUrl={userUrl}
        avatarSrc={avatarSrc}
        published={published}
      />
      <Preview previewSrc={previewSrc} />
      <Menu postId={postId} />
      <Controls score={score} />
    </li>
  );
}

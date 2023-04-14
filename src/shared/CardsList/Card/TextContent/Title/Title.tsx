import React from 'react';
import styles from './title.scss';
import { Link } from 'react-router-dom';

export interface ITitleProps {
  postId: string;
  subreddit: string;
  title: string;
}

export function Title({ postId, subreddit, title }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link className={styles.postLink} to={`/posts/${subreddit}/${postId}`}>
        {title ??
          `Следует отметить, что новая модель организационной деятельности
            Следует отметить, что новая модель организационной деятельности
            Следует отметить, что новая модель организационной деятельности
            Следует отметить, что новая модель организационной деятельности`}
      </Link>
    </h2>
  );
}

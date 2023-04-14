import React from 'react';
import styles from './postcomment.scss';
import { KarmaCounter } from '../../CardsList/Card/Controls/KarmaCounter';
import { UserLink } from '../../CardsList/Card/TextContent/UserLink';
import { EIcons, Icon } from '../../Icon';
import { EColors } from '../../enums';
import { Text } from '../../Text';
import { PostCommentForm } from './PostCommentForm';

export interface IPostCommentProps {
  commentId: string;
  author: string;
  score: string;
  created: number;
  body: string;
  replies?: Array<IPostCommentProps>;
}

export function PostComment({
  commentId,
  author,
  score,
  created,
  body,
  replies,
}: IPostCommentProps) {
  const [showCommentForm, setShowCommentForm] = React.useState(false);
  const [focusCommentForm, setFocusCommentForm] = React.useState(0);

  function handleAnswerButton() {
    setShowCommentForm(true);

    setFocusCommentForm(focusCommentForm + 1);
  }

  return (
    <div className={styles.commentContainer}>
      <div className={styles.counterContainer}>
        <KarmaCounter score={score} />
        <div className={styles.verticalLine} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.metaData}>
          <UserLink username={author} />

          <span className={styles.createdAt}>4 часа назад</span>
          <div className={styles.userLabel}>Лига юристов</div>
        </div>

        <p className={styles.textContent}>{body}</p>

        <ul className={styles.actions}>
          <li className={styles.actionItem} onClick={handleAnswerButton}>
            <Icon name={EIcons.comments} size={14} fill={EColors.grey99} />
            <Text size={14} mobileSize={12} color={EColors.grey99}>
              Ответить
            </Text>
          </li>

          <li className={styles.actionItem}>
            <Icon name={EIcons.share} size={14} fill={EColors.grey99} />
            <Text size={14} color={EColors.grey99}>
              Поделиться
            </Text>
          </li>

          <li className={styles.actionItem}>
            <Icon name={EIcons.warning} size={16} fill={EColors.grey99} />
            <Text size={14} mobileSize={12} color={EColors.grey99}>
              Пожаловаться
            </Text>
          </li>
        </ul>

        {replies !== undefined &&
          replies.map((commentData) => (
            <PostComment key={commentData.commentId} {...commentData} />
          ))}

        {showCommentForm && (
          <div className={styles.postCommentForm}>
            <PostCommentForm authorName={author} setFocus={focusCommentForm} />
          </div>
        )}
      </div>
    </div>
  );
}

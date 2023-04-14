import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.scss';
import { Card } from './Card';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/reducer';
import axios from 'axios';

export function CardsList() {
  const token = useSelector<TRootState>((state) => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [nextLoadingNumber, setNextLoadingNumber] = useState(1);

  const bottomOfList = useRef<HTMLDivElement>(null);

  const SHOW_LOAD_BUTTON_NUMBER = 3;

  useEffect(() => {
    if (!token || nextLoadingNumber === SHOW_LOAD_BUTTON_NUMBER) {
      return;
    }

    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const {
          data: {
            data: { after, children },
          },
        } = await axios.get('https://oauth.reddit.com/best/', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 10,
            after: nextAfter,
          },
        });

        setNextAfter(after);
        setPosts((prevChildren) => prevChildren.concat(...children));
        setNextLoadingNumber((prevLoadingNumber) => prevLoadingNumber + 1);
      } catch (error) {
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          load();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [nextLoadingNumber, nextAfter, token]);

  function handleLoadMoreClick() {
    setNextLoadingNumber(0);
  }

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center' }}>Нет ни одного поста</div>
      )}

      {posts.map(
        ({
          data: {
            id,
            subreddit,
            userUrl,
            author,
            published,
            avatarSrc,
            previewSrc,
            title,
            score,
          },
        }) => (
          <Card
            key={id}
            postId={id}
            subreddit={subreddit}
            userUrl={userUrl}
            username={author}
            published={published}
            avatarSrc={avatarSrc}
            previewSrc={previewSrc}
            title={title}
            score={score}
          />
        )
      )}

      <div ref={bottomOfList} />

      {nextLoadingNumber === SHOW_LOAD_BUTTON_NUMBER &&
        !loading &&
        !errorLoading && (
          <button
            className={styles.loadMoreButton}
            onClick={handleLoadMoreClick}
          >
            Загрузить ещё
          </button>
        )}

      {loading && <div style={{ textAlign: 'center' }}>Загрузка...</div>}

      {errorLoading && (
        <div role="alert" style={{ textAlign: 'center' }}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}

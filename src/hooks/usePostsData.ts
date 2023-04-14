import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICardProps } from '../shared/CardsList/Card';
import { useSelector } from 'react-redux';
import { TRootState } from '../store/reducer';

type IPostData = ICardProps;
type IPostsData = Array<IPostData>;

export function usePostsData() {
  const [data, setData] = useState<IPostsData>([]);
  const token = useSelector<TRootState, string>((state) => state.token);

  useEffect(() => {
    if (!token) {
      return;
    }

    axios
      .get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const postsData = resp.data.data.children;
        const postsResultsData: IPostsData = [];

        postsData.forEach(
          ({ data: { id, author, title, score, subreddit, preview } }: any) => {
            postsResultsData.push({
              postId: id,
              title: title,
              username: author,
              score: score,
              subreddit: subreddit,
              previewSrc: preview?.enabled
                ? preview?.images?.[0]?.source?.url ?? null
                : null,
            });
          }
        );

        setData(postsResultsData);
      })
      .catch(console.log);
  }, [token]);

  return [data];
}

import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { ICardProps } from '../CardsList/Card';

type IPostContextData = ICardProps;

type IPostsContextData = Array<IPostContextData>;

export const postsContext = React.createContext<IPostsContextData>([]);

export function PostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data] = usePostsData();

  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}

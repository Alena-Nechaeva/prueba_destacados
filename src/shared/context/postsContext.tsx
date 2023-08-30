import React from 'react';

export interface IPostContextData {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
}

export const postsContext = React.createContext<Array<IPostContextData>>([]);

export function PostsContextProvider({ children, data }: { children: React.ReactNode; data: any }) {
  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}

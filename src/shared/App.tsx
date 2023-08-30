import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.css';
import { Layout } from './Layout/Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { PostsContextProvider } from './context/postsContext';
import { usePostsData } from '../hooks/usePostsData';

function AppComponent() {
  const [data] = usePostsData();
  return (
    <PostsContextProvider data={data}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </PostsContextProvider>
  );
}

export const App = hot(() => <AppComponent />);

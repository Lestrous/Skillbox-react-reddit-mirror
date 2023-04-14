import React, { useEffect, useState } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import thunk from 'redux-thunk';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { Post } from './shared/Post';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponentWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        {mounted && (
          <BrowserRouter>
            <AppComponent />
          </BrowserRouter>
        )}
      </Provider>
    </React.StrictMode>
  );
}

function AppComponent() {
  useToken();

  return (
    <UserContextProvider>
      <PostsContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/posts/" />} />
          <Route path="/auth" element={<Navigate to="/posts/" />} />
          <Route
            path="/posts/"
            element={
              <Layout>
                <Header />
                <Content>
                  <CardsList />

                  <Outlet />
                </Content>
              </Layout>
            }
          >
            <Route path=":subreddit/:postId" element={<Post />} />
          </Route>
          <Route
            path="*"
            element={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  width: '100vw',
                  fontWeight: 'bold',
                }}
              >
                404 — страница не найдена
              </div>
            }
          />
        </Routes>
      </PostsContextProvider>
    </UserContextProvider>
  );
}

export const App = hot(() => <AppComponentWrapper />);

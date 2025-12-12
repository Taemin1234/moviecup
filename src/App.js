import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import reset from 'styled-reset';

import Header from './layout/Header'
import MovieContainer from './components/MovieContainer'
import Hof from './components/Hof'

import './App.css';

const GlobalStyle = createGlobalStyle`
// reset css 적용
  ${reset}
  /* 이곳에 추가적인 전역 스타일을 설정 가능 */
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.8;
  }

  body {
    background-color: #0a1f44;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MovieContainer />} />
        <Route path="/Hof" element={<Hof />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
}

export default App;

import React from 'react';
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Header from './layout/Header'
import IndexBox from './components/IndexBox';
import MovieInfo from './components/MovieInfo';

import './App.css';

const Container = styled.div`
	width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 이곳에 추가적인 전역 스타일을 설정 가능 */
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      <Container>
        <IndexBox/>
        <MovieInfo/>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

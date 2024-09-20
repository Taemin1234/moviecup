import React, { useState } from 'react';
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import reset from 'styled-reset';

import Header from './layout/Header'
import IndexBox from './components/IndexBox';
import MovieInfo from './components/MovieInfo';
import Modal from '../src/components/Modal';
import Worldcup from '../src/components/Worldcup';
import Hof from './components/Hof'

import './App.css';

const Container = styled.div`
	width: 100%;
  padding-top: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
// reset css 적용
  ${reset}
  /* 이곳에 추가적인 전역 스타일을 설정 가능 */
  a {
    text-decoration: none;
    color: #fff;
  }

  body {
    background-color: #0a1f44;
    color: #fff;
  }
`;

const queryClient = new QueryClient();

function App() {
  const [show, setShow] = useState(false)
  const showModal = () => setShow(!show);

  const [showMovie, setShowMovie] = useState(false)
  const showMovieModal = () => setShowMovie(!showMovie);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      {/* <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Hof" element={<Hof />}></Route>
      </Routes> */}
      <Container>
        <IndexBox showModal={showModal} showMovieModal={showMovieModal} />
        {show && <Modal closeModal={showModal} />}
        {showMovie && <Worldcup closeModal={showMovieModal} />}
        <MovieInfo/>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
}

export default App;

import React, { useState,  useRef } from 'react';
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import ReactCanvasConfetti from 'react-canvas-confetti';

import Header from './layout/Header'
import IndexBox from './components/IndexBox';
import MovieInfo from './components/MovieInfo';
import Modal from '../src/components/Modal';
import Worldcup from '../src/components/Worldcup';

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
  const refAnimationInstance = React.useRef(null);

  const getInstance = (instance) => {
    console.log('getInstance 호출됨:', instance);
    refAnimationInstance.current = instance;
  };

  const makeShot = () => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current.fire({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      console.error('refAnimationInstance.current가 설정되지 않았습니다.');
    }
  };


  const handleClick = () => {
    console.log('클릭?')
    makeShot();
  };

  const [show, setShow] = useState(false)
  const showModal = () => setShow(!show);

  const [showMovie, setShowMovie] = useState(false)
  const showMovieModal = () => setShowMovie(!showMovie);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      <Container>
        <button onClick={handleClick}>눌러</button>
        <ReactCanvasConfetti getInstance={getInstance}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        />
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

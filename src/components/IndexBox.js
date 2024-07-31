import React, { useState } from 'react';
import * as MI from '../style/style'
import Button from './Button'
// import Modal from './Modal';

const IndexBox = ({showModal}) => {
  // const [show, setShow] = useState(false)

  // const showModal = () => setShow(!show);

  return (
    <>
      <MI.Box>
        <Button onClick={showModal}>조건설정</Button>
        <Button>
          느와르
          <span>X</span>
        </Button>
        <Button>월드컵 시작!</Button>
      </MI.Box>
    </>
  );
};

export default IndexBox;
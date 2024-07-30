import React, { useState } from 'react';
import * as MI from '../style/style'
import Button from './Button'
import Modal from './Modal';

const IndexBox = () => {
  const [show, setShow] = useState(false)

  const showModal = () => setShow(!show);

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
      {show && <Modal closeModal={showModal} />}
    </>
  );
};

export default IndexBox;
import React, { useState } from 'react';
import Button from './Button'
import Modal from './Modal';

const IndexBox = () => {
  const [show, setShow] = useState(false)

  const showModal = () => setShow(!show);

  return (
    <div>
      <button onClick={showModal}>조건설정</button>
      <Button>
        느와르
        <span>X</span>
      </Button>
      <Button>월드컵 시작!</Button>
      {show && <Modal closeModal={showModal} />}
      
    </div>
  );
};

export default IndexBox;
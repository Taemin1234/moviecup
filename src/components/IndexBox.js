import React from 'react';
import * as MI from '../style/style'
import Button from './Button'

const IndexBox = ({showModal}) => {

  return (
    <>
      <MI.Box>
        <Button onClick={showModal}>조건설정</Button>
        <MI.DelButton>
          느와르
          <span className='close'>X</span>
        </MI.DelButton>
        <Button>월드컵 시작!</Button>
      </MI.Box>
    </>
  );
};

export default IndexBox;
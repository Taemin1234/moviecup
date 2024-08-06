import React from 'react';
import * as MI from '../style/style'
import Button from './Button'

// useSelector로 redux store에 저장된 데이터를 가져온다.
// state를 변경할 때 useDispatch로 감싸서 사용
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeGenre } from '../store/genreSlice'

const IndexBox = ({showModal}) => {
  const dispatch = useDispatch()
  let seletedGenre = useSelector((state) => state.genre)
  
  return (
    <>
      <MI.Box>
        <Button onClick={showModal}>조건설정</Button>
        {seletedGenre.map((el, i) => {
          return <MI.DelButton key={i}>{el} <span className='close'>X</span></MI.DelButton>
        })}
        <Button>월드컵 시작!</Button>
      </MI.Box>
    </>
  );
};

export default IndexBox;
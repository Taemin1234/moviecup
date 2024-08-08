import React from 'react';
import * as MI from '../style/style'
import Button from '../layout/Button'

// useSelector로 redux store에 저장된 데이터를 가져온다.
// state를 변경할 때 useDispatch로 감싸서 사용
import { useSelector } from 'react-redux'

const IndexBox = ({showModal}) => {
  let selectedGenre = useSelector((state) => state.genre)
  let {startYear, endYear} = useSelector((state) => state.year)
  let selectLang = useSelector((state) => state.language)

  console.log(selectedGenre)
  console.log(startYear, endYear)
  console.log(selectLang)
  
  return (
    <>
      <MI.IdxBox bg={'skyblue'}>
        <Button onClick={showModal}>조건설정</Button>
        {selectedGenre.map((el, i) => {
          return <MI.DelButton key={i}>{el} <span className='close'>X</span></MI.DelButton>
        })}
        <div>
          <p>{startYear||'시작연도'}</p> - <p>{endYear || '끝연도'}</p>
        </div>
        <p>{selectLang}</p>
        <Button bg='#ffd08b' color='#fff' className='btn_start'>월드컵 시작!</Button>
      </MI.IdxBox>
    </>
  );
};

export default IndexBox;
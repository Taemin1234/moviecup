import React from 'react';
import { genres, language } from '../data/data'
import * as MI from '../style/style'
import Button from '../layout/Button'

// useSelector로 redux store에 저장된 데이터를 가져온다.
// state를 변경할 때 useDispatch로 감싸서 사용
import { useSelector } from 'react-redux'

const IndexBox = ({showModal}) => {
  let selectedGenre = useSelector((state) => state.genre)
  let {startYear, endYear} = useSelector((state) => state.year)
  let selectLang = useSelector((state) => state.language)

  // selectedGenre가 문자열로 반환되어 숫자형으로 변경
  const selGenreNum = selectedGenre.map(Number)

  // 장르 코드를 글자로 치환
  // genres 배열의 id 값이 selGenreNum 배열에 포함된 항목만 필터링
  // 필터링된 항목의 name 값을 추출
  const genreRes = genres.filter(g => selGenreNum.includes(g.id)).map(g => g.name); 

  // 언어 코드를 글자로 치환
  const langRes = language.filter(g => selectLang.includes(g.lang)).map(g => g.trans); 

  return (
    <>
      <MI.IdxBox bg={'skyblue'}>
        <MI.FlexStart>
          <Button onClick={showModal}>조건설정</Button>
          <MI.FlexColumn>
            <MI.FlexStart>
              {genreRes.map((el, i) => {
                return <MI.Buttons key={i} cursor={'default'}>{el}</MI.Buttons>
              })}
            </MI.FlexStart>
            <MI.FlexStart>
              <p>{startYear||'모든연도'}</p> - <p>{endYear || '모든연도'}</p>
            </MI.FlexStart>
            <p>{langRes}</p>
          </MI.FlexColumn>
        </MI.FlexStart>
        <Button bg='#ffd08b' color='#fff'>월드컵 시작!</Button>
      </MI.IdxBox>
    </>
  );
};

export default IndexBox;
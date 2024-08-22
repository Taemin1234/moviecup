import React from 'react';
import { genres, language } from '../data/data'
import * as MI from '../style/style'

// useSelector로 redux store에 저장된 데이터를 가져온다.
// state를 변경할 때 useDispatch로 감싸서 사용
import { useSelector } from 'react-redux'

const IndexBox = ({showModal, showMovieModal}) => {
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
      <MI.IdxBox>
        <MI.FlexStart>
          <MI.ButtonHover onClick={showModal}>조건설정</MI.ButtonHover>
          <MI.FlexColumn>
            <MI.FlexStart>
              {genreRes.map((el, i) => {
                return <MI.Buttons key={i} bg={'gray'}>{el}</MI.Buttons>
              })}
            </MI.FlexStart>
            <MI.FlexStart>
              <MI.Text1>{startYear||'모든연도'}</MI.Text1> - <MI.Text1>{endYear || '모든연도'}</MI.Text1>
              <MI.Text1>{langRes}</MI.Text1>
            </MI.FlexStart>
          </MI.FlexColumn>
        </MI.FlexStart>
        <MI.ButtonHover bg='#ffd08b' bgh='#d4af37' color='#fff' onClick={showMovieModal}>월드컵 시작!</MI.ButtonHover>
      </MI.IdxBox>
    </>
  );
};

export default IndexBox;
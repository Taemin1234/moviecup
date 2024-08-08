import React, { useEffect, useState } from "react";
import * as MI from '../style/style'

import Button from '../layout/Button'
import GenreCheck from './GenreCheck'
import YearRange from "./YearRange";
import LanguageSel from "./LanguageSel"

// useSelector로 redux store에 저장된 데이터를 가져온다.
// state를 변경할 때 useDispatch로 감싸서 사용
import { useDispatch } from 'react-redux'
import { addGenre } from '../store/genreSlice'
import { addStartYear, addEndYear } from '../store/yearSlice'
import { addLang } from '../store/langSlice'

const Modal = ({ closeModal }) => {
  
  //모달창 활성화 시 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  // 각 컴포넌트에서 클릭된 값 가져오기
    const [getGenre, setGetGenre] = useState([])
    const [getYear, setGetYear] = useState({'startY' : '', 'endY' : ''})
    const [getLang, setGetLang] = useState()

    // 장르 선택확인
    const dispatch = useDispatch()

    const applySetting = () => {
      // 적용 버튼을 클릭하면 redux에 저장된 데이터 반영
      dispatch(addGenre(getGenre))
      dispatch(addStartYear(getYear.startY))
      dispatch(addEndYear(getYear.endY))
      dispatch(addLang(getLang))
      closeModal()
    }

    return (
      <MI.ModalWrap>
        <MI.ModalCont>
          <MI.CircleBtn onClick={closeModal}>X</MI.CircleBtn>
          <MI.Title>조건 검색</MI.Title>
          <div className="modal-content">
            <MI.MoList>
              <dt>장르</dt>
              <dd className="flex_area">
                <GenreCheck setGetGenre={setGetGenre}/>
              </dd>
            </MI.MoList>
            <MI.MoList>
              <dt>개봉연도</dt>
              <dd className="flex_area">
                <YearRange setGetYear={setGetYear}/>
              </dd>
            </MI.MoList>
            <MI.MoList>
              <dt>제작언어</dt>
              <dd className="flex_area">
                <LanguageSel setGetLang={setGetLang}/>
              </dd>
            </MI.MoList>
            <MI.ButtonApp>
              <Button onClick={applySetting} children='적용' bg='#ffd08b' />
            </MI.ButtonApp>
          </div>
        </MI.ModalCont>
        
      </MI.ModalWrap>
    );
  };
  
  export default Modal;
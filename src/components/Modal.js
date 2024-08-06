import React, { useEffect } from "react";
import * as MI from '../style/style'
import {genres, language} from '../data/data'

import Button from './Button'
import Chkbox from './Chkbox'
import YearRange from "./YearRange";
import LanguageSel from "./LanguageSel"

// useSelector로 redux store에 저장된 데이터를 가져온다.
// state를 변경할 때 useDispatch로 감싸서 사용
import { useDispatch } from 'react-redux'
import { addGenre, removeGenre } from '../store/genreSlice'

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

    // 장르 선택확인
    const dispatch = useDispatch()
    
    const selectCheckbox = (e) => {
      
      // 현재 체크된 항목
      const gvalue = e.target.value;
      // 체크 되었는 지 확인
      const isChecked = e.target.checked;

      if (isChecked) {
        // 체크된 경우 배열에 추가

        dispatch(addGenre(gvalue));
      } else {
        // 체크 해제된 경우 배열에서 제거
        dispatch(removeGenre(gvalue));
      }
      
     };

    return (
      <MI.ModalWrap>
        <MI.ModalCont>
          <MI.CircleBtn onClick={closeModal}>X</MI.CircleBtn>
          <MI.Title>조건 검색</MI.Title>
          <div className="modal-content">
            <MI.MoList>
              <dt>장르</dt>
              <dd className="flex_area">
                {genres.map((el) => {
                  return (
                    <Chkbox 
                      bg={'#828282'} 
                      color={'#fff'} 
                      bgc={'#010101'} 
                      onChange={selectCheckbox}
                      idFor={el.id} 
                      key={el.id}
                      value={el.name}>
                        {el.name}
                    </Chkbox>
                      
                  )
                })}
              </dd>
            </MI.MoList>
            <MI.MoList>
              <dt>개봉연도</dt>
              <dd className="flex_area">
                <YearRange/>
              </dd>
            </MI.MoList>
            <MI.MoList>
              <dt>제작언어</dt>
              <dd className="flex_area">
                <LanguageSel/>
              </dd>
            </MI.MoList>
            <MI.ButtonApp>
              <Button children='적용' bg='#ffd08b' />
            </MI.ButtonApp>
          </div>
        </MI.ModalCont>
        
      </MI.ModalWrap>
    );
  };
  
  export default Modal;
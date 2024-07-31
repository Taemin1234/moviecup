import React, {useEffect} from "react";
import * as MI from '../style/style'

const Modal = ({ closeModal}) => {
  
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


    return (
      <MI.ModalWrap>
        <MI.ModalCont>
          <MI.CircleBtn onClick={closeModal}>X</MI.CircleBtn>
          <p>조건 검색</p>
          <div className="modal-content">
            <dl>
              <dt>장르</dt>
              <dd>
                이것저것, 요것저것
              </dd>
            </dl>
            <dl>
              <dt>연도</dt>
              <dd>
                이것저것, 요것저것
              </dd>
            </dl>
          </div>
        </MI.ModalCont>
      </MI.ModalWrap>
    );
  };
  
  export default Modal;
import React, { useEffect, useState } from "react";
import * as MI from '../style/style'

const Worldcup = ({closeModal}) => {
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
                <MI.Title>조건 검색</MI.Title>
                보이나?
            </MI.ModalCont>
        
        </MI.ModalWrap>
    )
}

export default Worldcup
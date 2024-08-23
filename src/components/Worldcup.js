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
            <MI.MoviecupCont>
                <MI.CircleBtn onClick={closeModal}>X</MI.CircleBtn>
                <MI.Title>영화 월드컵</MI.Title>
                <div>
                    <a href="javascript:void(0)">
                        왼쪽 데이터
                    </a>
                    <a href="javascript:void(0)">
                        오른쪽 데이터
                    </a>
                </div>
            </MI.MoviecupCont>
        </MI.ModalWrap>
    )
}

export default Worldcup
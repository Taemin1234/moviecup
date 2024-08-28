import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import * as MI from '../style/style'

const Worldcup = ({closeModal}) => {
    let wcList = useSelector((state) => state.worldcup)

    const [displays, setDisplays] = useState([])

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

   useEffect(() => {
    /* object 객체를 배열처럼 map으로 돌리기 (object.entries 사용) */
    const oWc = Object.values(wcList)
    const arrWc = []

    oWc.forEach((el) => {
        arrWc.push(Object.values(el))
    })
    setDisplays(prevDp => [...prevDp, arrWc[0], arrWc[1]])
    // setDisplays(arrWc[0],arrWc[1])
    // console.log(arrWc)
   }, [])

//    console.log(wcList)
   console.log(displays)

    return (
        <MI.ModalWrap>
            <MI.MoviecupCont>
                <MI.CircleBtn onClick={closeModal}>X</MI.CircleBtn>
                <MI.Title>영화 월드컵</MI.Title>
                <div>
                    {displays.map(dp => {
                        return (
                            <a href="javascript:void(0)" key={dp[3]}>
                                
                                <p>{dp[10]}</p>
                                <img src={`https://image.tmdb.org/t/p/w200/${dp[8]}`} alt={dp[10]} />
                            </a>
                        )
                    })}
                    {/* <a href="javascript:void(0)" key={displays[3]}>
                        <p>{displays[10]}</p>
                        <img src={`https://image.tmdb.org/t/p/w300/${displays[8]}`} alt={displays[10]} />
                     </a> */}
                </div>
            </MI.MoviecupCont>
        </MI.ModalWrap>
    )
}

export default Worldcup
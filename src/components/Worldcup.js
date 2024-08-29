import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import * as MI from '../style/style'

const Worldcup = ({closeModal}) => {
    let wcList = useSelector((state) => state.worldcup)

    const [displays, setDisplays] = useState([])
    const [winners, setWinners] =useState([])

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

    setDisplays([arrWc[0],arrWc[1]])
    // console.log(arrWc)
   }, [])

   const selectedMovie = (movie) => () => {
    setWinners(movie)
    
   }

   console.log(winners)

    return (
        <MI.ModalWrap>
            <MI.MoviecupCont>
                <MI.CircleBtn onClick={closeModal}>X</MI.CircleBtn>
                <MI.Title>영화 월드컵</MI.Title>
                <MI.FlexWrap>
                    {displays.map(dp => {
                        return (
                            <MI.selectMbox href="javascript:void(0)" key={dp[3]} onClick={selectedMovie(dp)}>  
                                <p className="title">{dp[10]}</p>
                                <img src={`https://image.tmdb.org/t/p/w400/${dp[8]}`} alt={dp[10]} />
                            </MI.selectMbox>
                        )
                    })}
                </MI.FlexWrap>
            </MI.MoviecupCont>
        </MI.ModalWrap>
    )
}

export default Worldcup
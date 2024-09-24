import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Confetti from 'react-confetti'

import { addWinner } from '../store/winnerSlice'

import * as MI from '../style/style'

const Worldcup = ({closeModal}) => {
    let wcList = useSelector((state) => state.worldcup)

    const dispatch = useDispatch();

    // 매칭할 전체 영화 state
    const [movie, setMovie] = useState([])
    // 매칭되는 state
    const [displays, setDisplays] = useState([])
    // 승자 state
    const [winners, setWinners] = useState([])
    const [top, setTop] = useState(false)

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

    /* object 객체를 배열처럼 map으로 돌리기 (object.entries 사용) */
    const oWc = Object.values(wcList);
    const arrWc = []
    
    oWc.forEach((el) => {
        arrWc.push(Object.values(el))
    })

   useEffect(() => {
    setMovie(arrWc)
    setDisplays([arrWc[0],arrWc[1]])
    // console.log(movie)
   }, [])

    // 해당 날짜 구하기 
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month  + '-' + day;

    console.log(dateString);

   const selectedMovie = (m) => () => {
    if(movie.length <=2 ) {
        if(winners.length ===0) {
            setDisplays([m]);
            console.log(m)
            setTop(true);
            dispatch(addWinner([...m, dateString]));
        } else {
            let updateMovie = [...winners, m];
            setMovie(updateMovie);
            setDisplays([updateMovie[0], updateMovie[1]]);
            setWinners([])
        }
    } else if (movie.length > 2) {
        setWinners([...winners, m])
        setDisplays([movie[2],movie[3]])
        setMovie(movie.slice(2))
    }
    // console.log(m[10])
   }

    return (
        <MI.ModalWrap>
            <MI.MoviecupCont>
                <MI.CircleBtn onClick={closeModal}>X</MI.CircleBtn>
                <MI.TitleWrap>
                    <MI.Title>영화 월드컵</MI.Title>
                    <MI.SubTitle>{movie.length} / {movie.length + winners.length * 2}</MI.SubTitle>
                </MI.TitleWrap>
                <MI.FlexWrap>
                    {displays.map(dp => {
                        return (
                            <MI.SelectMbox href="javascript:void(0)" key={dp[3]} onClick={selectedMovie(dp)} choiceWinner = {top}>  
                                <p className="title">{dp[10]}</p>
                                <img src={`https://image.tmdb.org/t/p/w400/${dp[8]}`} alt={dp[10]} />
                            </MI.SelectMbox>
                        )
                    })}
                </MI.FlexWrap>
                {top ? <div>우승!!</div> : null}
            </MI.MoviecupCont>
            {top && <Confetti />}
        </MI.ModalWrap>
    )
}

export default Worldcup
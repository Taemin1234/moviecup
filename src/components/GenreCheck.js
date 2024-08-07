import React, { useState, useEffect } from "react";
import { genres } from '../data/data'

import Chkbox from '../layout/Chkbox'

const GenreCheck = ({setGetGenre}) => {
    const [selectGenre, setSelectGenre] = useState([])

    // console.log(selectGenre)

    const selectCheckbox = (e) => {
        // 현재 체크된 항목
        const gvalue = e.target.value;
        // 체크 되었는 지 확인
        const isChecked = e.target.checked;

        setSelectGenre((prevSelectGenre) => {
            if (isChecked) {
            // 체크된 경우 배열에 추가
            return [...prevSelectGenre, gvalue];
            } else {
            // 체크 해제된 경우 배열에서 제거
            return prevSelectGenre.filter((item) => item !== gvalue);
            }
        });
        
    };

    //Modal.js에 데이터 전달
    useEffect(() => {
        setGetGenre(selectGenre);
    }, [selectGenre, setGetGenre]);

    return (
        <>
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
        </>
    )
}

export default GenreCheck
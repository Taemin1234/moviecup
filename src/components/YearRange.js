import React, { useState, useEffect } from "react";
import * as MI from '../style/style'

import Radio from '../layout/Radio'

const YearRange = ({setGetYear}) => {
    const [startYear, setStartYear] = useState('1900');
    const [endYear, setEndYear] = useState('2024');
    // 연도 목록 생성
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
        years.push(i);
    }
    const handleStartYearChange = (e) => {
        //종료 연도가 없거나 종료연도보다 작거나 같은 연도를 선택했을 때 
        if(endYear === '' || e.target.value <= endYear) {
            setStartYear(e.target.value);
        }
        
    };
    const handleEndYearChange = (e) => {
        // 시작연도가 비어있지않고 시작연도보다 크거나 같은 연도를 선택했을 때
        if(e.target.value >= startYear && startYear !== '') {
        setEndYear(e.target.value);
        }
    };

    const yearSel = years.map((year) => (
        <option key={year} value={year}>
        {year}
        </option>
    ))

    useEffect(() => {
        setGetYear({'startY' : startYear, 'endY' : endYear})
    },[startYear, endYear])

    return (
        <MI.RadioInput>
            <Radio value={startYear} onChange={handleStartYearChange} title="연도선택" children={yearSel}/>
            <span className="hyphen">to</span>
            <Radio value={endYear} onChange={handleEndYearChange} title="연도선택" children={yearSel}/>
        </MI.RadioInput>
    )
};

export default YearRange
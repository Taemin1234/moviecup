import React, { useState } from "react";
import * as MI from '../style/style'

const YearRange = () => {
        const [startYear, setStartYear] = useState('');
        const [endYear, setEndYear] = useState('');
        // 연도 목록 생성
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= 1900; i--) {
            years.push(i);
        }
        const handleStartYearChange = (e) => {
            //종료 연도가 없거나 종료연도보다 작거나 같은 연도를 선택했을 때 
            if(endYear == '' || e.target.value <= endYear) {
                setStartYear(e.target.value);
            }
            
        };
        const handleEndYearChange = (e) => {
            // 시작연도가 비어있지않고 시작연도보다 크거나 같은 연도를 선택했을 때
           if(e.target.value >= startYear && startYear !== '') {
            setEndYear(e.target.value);
           }
        };

        console.log(`시작년도 : ${startYear}, end year : ${endYear}`)
        return (
            <>
                <MI.InputWrap>
                    <label>
                        <select value={startYear} onChange={handleStartYearChange}>
                        <option value="">연도선택</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                            {year}
                            </option>
                        ))}
                        </select>
                    </label>
                    <span className="hyphen">-</span>
                    <label>
                        <select value={endYear} onChange={handleEndYearChange}>
                        <option value="">연도선택</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                            {year}
                            </option>
                        ))}
                        </select>
                    </label>
                </MI.InputWrap>
            </>
        )
};

export default YearRange
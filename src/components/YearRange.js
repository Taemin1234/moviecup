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
            setStartYear(e.target.value);
        };
        const handleEndYearChange = (e) => {
            setEndYear(e.target.value);
        };

        console.log(`시작년도 : ${startYear}, end year : ${endYear}`)
        return (
            <div>
                <label>
                    Start Year:
                    <select value={startYear} onChange={handleStartYearChange}>
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                        {year}
                        </option>
                    ))}
                    </select>
                </label>
                <label>
                    End Year:
                    <select value={endYear} onChange={handleEndYearChange}>
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                        {year}
                        </option>
                    ))}
                    </select>
                </label>
                <div>
                    Selected Year Range: {startYear} - {endYear}
                </div>
            </div>
        )
};

export default YearRange
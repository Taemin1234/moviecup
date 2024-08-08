import React, { useState, useEffect } from "react";
import { language } from '../data/data'
import * as MI from '../style/style'

import Radio from '../layout/Radio'

const LanguageSel = ({setGetLang}) => {
    const [lang, setLang] = useState('')

    const handleLanguage = (e) => {
        setLang(e.target.value)
    }

    const langList = language.map((lang) => (
        <option key={lang.lang} value={lang.trans}>
        {lang.trans}
        </option>
    ))
    
    useEffect(() => {
        setGetLang(lang);
    },[lang])

    return (
        <MI.RadioInput>
            <Radio value={lang} onChange={handleLanguage} title="전체">
                {langList}
            </Radio>
        </MI.RadioInput>
    )
}

export default LanguageSel
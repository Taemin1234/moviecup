import React, { useState } from "react";
import { language } from '../data/data'
import * as MI from '../style/style'

import Radio from './Radio'

const LanguageSel = () => {
    const [lang, setLang] = useState('')

    const handleLanguage = (e) => {
        setLang(e.target.value)
    }

    const langList = language.map((lang) => (
        <option key={lang.lang} value={lang.trans}>
        {lang.trans}
        </option>
    ))

    return (
        <MI.RadioInput>
            <Radio value={lang} onChange={handleLanguage} title="제작언어">
                {langList}
            </Radio>
        </MI.RadioInput>
    )
}

export default LanguageSel
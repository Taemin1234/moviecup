import React from "react";
import * as MI from '../style/style'

const Chkbox = ({idFor, children, value, onChange, bg, bgc, color, colorc}) => {
    
    return (
        <MI.ChkboxWrap bg={bg} color={color} bgc={bgc} colorc={colorc}>
            <input type="checkbox" id={idFor} value={value} onChange={onChange}/>
            <label for={idFor}>{children}</label>
        </MI.ChkboxWrap>
    )
}

export default Chkbox
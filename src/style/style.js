import styled from "styled-components";

//check box
export const Chkbox_wrap = styled.div`

    & input {
        display: none;
    }

    & input + label {
        content: '';
        display: inline-block;
        border-radius: 10px;
        padding: 5px 10px;
        background-color: ${({ bg }) => bg || '#fff'};
        color: ${({ color }) => color || '#000'};
        border: solid 1px #000;
        cursor: pointer;
    }

    & input:checked + label {
        background-color: ${({ bgc }) => bgc || '#000'};
        color: ${({ colorc }) => colorc || '#fff'};
    }
`

//Button
export const Buttons =styled.button`
    border-radius: 10px;
    padding: 5px 10px;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#000'};
    margin: ${({ margin }) => (margin ? margin : '0')};
    border: solid 1px #000;
    cursor: pointer;
`;

export const DelButton = styled(Buttons)`
    position: relative;
    padding-right: 25px;
    cursor: default;

    .close {
        position: absolute;
        display: block;
        top: 7px;
        right: 10px;
        cursor: pointer;
    }
`

export const Box = styled.div`
width: 100%;
border: solid 1px #000;
border-radius: 10px;
padding: 15px;
background-color: ${({ bg }) => (bg ? bg : '#fff')};
box-sizing: border-box;
`;

export const BoxWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 25px;
`;

// 모달창
export const ModalWrap = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
`

export const ModalCont = styled.div`
    position: relative;
    width: 500px;
    border-radius: 15px;
    padding: 30px 20px;
    background-color: aliceblue;
`

export const CircleBtn = styled.button`
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`

export const Title = styled.p`
    font-size: 30px;

`

export const MoList = styled.dl`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 15px;
    border-bottom: solid 1px #000;

    & dt {
        position: relative;
        min-width: 70px;
        text-align: center;
        padding-right: 30px;
        font-size: 20px;

        &:before {
            position: absolute;
            content: '';
            width: 1px;
            height: 20px;
            background-color: #ddd;
            top: 0; 
            right: 15px;
        }
    }

    & dd {
        &.flex_area {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 7px;
            
        }
    }
`
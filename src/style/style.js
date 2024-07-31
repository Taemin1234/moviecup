import styled from "styled-components";

export const Button =styled.button`

`;

export const Box = styled.div`
width: 100%;
border: solid 1px #000;
border-radius: 10px;
padding: 15px;
background-color: ${({ bg }) => (bg ? bg : '#fff')};
box-sizing: border-box;
`;

export const BoxWrap = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px; */
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
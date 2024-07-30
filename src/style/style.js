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
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
    z-index: 999;
`
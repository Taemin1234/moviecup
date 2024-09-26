import styled, {css} from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-top: 30px;
    max-width: 1200px;
    margin: 0 auto;
`

// header
export const HeaderTitle = styled.h1`
    margin: 20px 0;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
`

export const Nav =styled.nav`
    width: 100%;
    height: 60px;

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-bottom : solid 1px #c0c0c0;
        border-top : solid 1px #c0c0c0;

        & li {
            height: 100%;
            padding: 0 15px;
            border-left: solid 1px #c0c0c0;
            line-height: 60px;

            &:last-child {
                border-right: solid 1px #c0c0c0;
            }
        }
    }
`

//check box
export const ChkboxWrap = styled.div`

    & input {
        display: none;
    }

    & input + label {
        content: '';
        display: inline-block;
        border-radius: 10px;
        padding: 5px 15px;
        background-color: ${({ bg }) => bg || '#fff'};
        color: ${({ color }) => color || '#000'};
        cursor: pointer;
    }

    & input:checked + label {
        background-color: ${({ bgc }) => bgc || '#000'};
        color: ${({ colorc }) => colorc || '#fff'};
    }
`

//Button
export const Buttons = styled.button`
    border-radius: 10px;
    padding: 5px 10px;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#000'};
    margin: ${({ margin }) => (margin ? margin : '0')};
    border: none;
`;

export const ButtonHover = styled(Buttons)`
    &:hover {
        background-color: ${({bgh}) => bgh || '#808080'};
        color: #fff;
        cursor: pointer;
    }
`

export const ButtonApp = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    & ${Buttons} {
        border: none;
        width: 130px;
        height: 40px;
        font-size: 18px;
    }
`

// radio
export const RadioInput = styled.div`

    & .hyphen {
        font-size: 20px;
        margin: 0 15px;
    }

    & select {
        width: 150px;
        background-color: #fff;
        font-size: 20px;
        padding: 5px 0;
        cursor: pointer;
    }
`

// 박스 스타일
export const Box = styled.div`
    display: flex;
    gap: 15px;
    align-items: flex-start;
    width: 100%;
    border-radius: 10px;
    padding: 15px;
    background-color: ${({ bg }) => (bg ? bg : '#363636')};
    color: #ededed;
    box-sizing: border-box;

    & img {
        width: 200px;
    }
`;

const flexsb = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const IdxBox = styled(Box)`
    position: relative;
    ${flexsb}
`

export const FlexStart = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`

export const BoxCont = styled.div`
    & .title {
        margin-bottom: 20px;
        font-size: 25px;
        font-weight: 700;
        word-break: keep-all;
    }

    & .genre_wrap {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;

    }

    & .info {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 10px;

        & p {
            position: relative;
            padding-right: 15px;

            &:before {
                position: absolute;
                display: block;
                content: '';
                width: 2px;
                height: 16px;
                top: 0;
                right: 7px;
                background-color: #d1d1d1;
            }

            &:last-child:before {
                content: none;
            }
        }
        
    }

    & .description {
        margin-top: 15px;
        line-height: 1.2;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 11;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    }
`

export const BoxWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 25px;
`;
export const BoxWrap4Col = styled(BoxWrap)`
    grid-template-columns: 1fr 1fr 1fr 1fr;

    ${Box} {
        align-items: center;
        flex-direction: column;

        h3 {
            font-size: 25px;
        }
    }
`

export const Text1 = styled.p`
    position: relative;
    font-size: 20px;
    font-weight: 700;

    &:last-child {
        padding-left: 15px;

        &:before {
            position: absolute;
            content: '';
            width: 2px;
            height: 18px;
            background-color: #c0c0c0;
            top: 50%;
            transform: translateY(-50%);
            left: 5px;
        }
    }
`


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
    background-color: rgba(91,91,91,0.75);
    z-index: 999;
`

export const ModalCont = styled.div`
    position: relative;
    width: 600px;
    border-radius: 15px;
    padding: 30px 20px;
    background-color: #363636;
    color: #ededed;
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
    font-weight: 700;
    margin-bottom: 40px;
`
export const SubTitle = styled.p`
    font-size: 25px;
    font-weight: 700;
`
export const TitleWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;

    ${Title} {
        margin-bottom: 0;
    }
`
export const MoList = styled.dl`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid 1px #000;

    & dt {
        position: relative;
        min-width: 120px;
        font-weight: 700;
        text-align: center;
        padding-right: 30px;
        font-size: 24px;

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
            gap: 10px;
            
        }
    }
`

// 영화 월드컵 모달
export const MoviecupCont = styled(ModalCont)`
    max-width: 1200px;
    width: fit-content;

    ${CircleBtn} {
        top: 20px;
        right: 20px;
        bottom: unset;
        left: unset;
        transform: unset;
    }
`
export const FlexWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const SelectMbox = styled.a`
    display: block;
    flex: 1;
    text-align: center;

    &:hover {
        opacity: 0.3;

        img {
            transform: scale(1.1);
        }
    }

    ${({ choiceWinner }) => 
    choiceWinner &&
    `
    &:hover {
      opacity: 1;
      cursor:default;
      
      img {
        transform: scale(1)
      }
    }
  `}

    .title {
        background-color: #595959;
        min-height: 50px;
        padding: 5px 10px;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }
`
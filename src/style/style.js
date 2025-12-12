import styled, {css} from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 30px 20px;
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 100px);
`

// header
export const HeaderTitle = styled.h1`
    margin: 25px 0;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    letter-spacing: 0.5px;
`

export const Nav =styled.nav`
    width: 100%;
    height: 60px;
    margin-bottom: 10px;

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-bottom : solid 1px #4a5568;
        border-top : solid 1px #4a5568;
        background-color: rgba(54, 54, 54, 0.3);

        & li {
            height: 100%;
            padding: 0 20px;
            border-left: solid 1px #4a5568;
            line-height: 60px;
            transition: background-color 0.2s ease;

            &:first-child {
                border-left: none;
            }

            &:last-child {
                border-right: solid 1px #4a5568;
            }

            &:hover {
                background-color: rgba(54, 54, 54, 0.5);
            }

            a {
                display: block;
                height: 100%;
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
        padding: 6px 16px;
        background-color: ${({ bg }) => bg || '#828282'};
        color: ${({ color }) => color || '#fff'};
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 14px;
        border: 1px solid transparent;
    }

    & input + label:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    & input:checked + label {
        background-color: ${({ bgc }) => bgc || '#1b263b'};
        color: ${({ colorc }) => colorc || '#fff'};
        border-color: #4a5568;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`

//Button
export const Buttons = styled.button`
    border-radius: 10px;
    padding: 6px 12px;
    background-color: ${({ bg }) => bg || '#828282'};
    color: ${({ color }) => color || '#fff'};
    margin: ${({ margin }) => (margin ? margin : '0')};
    border: none;
    font-size: 14px;
    transition: all 0.2s ease;
    cursor: ${({ cursor }) => cursor || 'pointer'};

    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }
`;

export const ButtonHover = styled(Buttons)`
    &:hover {
        background-color: ${({bgh}) => bgh || '#808080'};
        color: #fff;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }
`

export const ButtonApp = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;

    & ${Buttons} {
        border: none;
        width: 140px;
        height: 42px;
        font-size: 16px;
        font-weight: 600;
    }
`

// radio
export const RadioInput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & .hyphen {
        font-size: 18px;
        margin: 0 10px;
        color: #c0c0c0;
    }

    & select {
        width: 150px;
        background-color: #fff;
        font-size: 16px;
        padding: 6px 10px;
        cursor: pointer;
        border-radius: 6px;
        border: 1px solid #ddd;
        transition: border-color 0.2s ease;

        &:hover {
            border-color: #999;
        }

        &:focus {
            outline: none;
            border-color: #4a5568;
        }
    }
`

// 박스 스타일
export const Box = styled.div`
    display: flex;
    gap: 18px;
    align-items: flex-start;
    width: 100%;
    border-radius: 12px;
    padding: 18px;
    background-color: ${({ bg }) => (bg ? bg : '#363636')};
    color: #ededed;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);

    & img {
        width: 200px;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
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
    margin-bottom: 25px;
    background-color: #3a3a3a;
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
    flex: 1;

    & .title {
        margin-bottom: 16px;
        font-size: 24px;
        font-weight: 700;
        word-break: keep-all;
        color: #fff;
        line-height: 1.3;
    }

    & .genre_wrap {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 12px;
    }

    & .info {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 12px;
        gap: 12px;

        & p {
            position: relative;
            padding: 4px 0;
            font-size: 14px;
            color: #c0c0c0;

            &:before {
                display: none;
            }

            &:not(:last-child)::after {
                content: '|';
                margin-left: 12px;
                color: #666;
            }
        }
        
    }

    & .description {
        margin-top: 14px;
        line-height: 1.5;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 11;
        -webkit-box-orient: vertical;
        word-break: keep-all;
        color: #d1d1d1;
        font-size: 14px;
    }
`

export const BoxWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 25px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
export const BoxWrap4Col = styled(BoxWrap)`
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 18px;

    ${Box} {
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 20px;

        h3 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #fff;
        }

        img {
            width: 150px;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            color: #ededed;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`

export const Text1 = styled.p`
    position: relative;
    font-size: 16px;
    font-weight: 600;
    color: #ededed;
    display: inline-block;

    &:last-child {
        padding-left: 15px;

        &:before {
            position: absolute;
            content: '';
            width: 2px;
            height: 16px;
            background-color: #666;
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
    background-color: rgba(10, 31, 68, 0.85);
    z-index: 999;
    animation: fadeIn 0.2s ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const ModalCont = styled.div`
    position: relative;
    width: 90%;
    max-width: 600px;
    border-radius: 12px;
    padding: 35px 25px;
    background-color: #363636;
    color: #ededed;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: slideUp 0.2s ease;

    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
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
    background-color: #555;
    color: #fff;
    border: 2px solid #363636;
    font-size: 18px;
    font-weight: 700;
    transition: all 0.2s ease;

    &:hover {
        background-color: #666;
        transform: translateX(-50%) scale(1.1);
    }
`

export const Title = styled.p`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 30px;
    color: #fff;
`
export const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #c0c0c0;
    padding: 6px 12px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
`
export const TitleWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;

    ${Title} {
        margin-bottom: 0;
    }
`
export const MoList = styled.dl`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
    flex-direction: column;
    gap: 12px;

    & dt {
        position: relative;
        min-width: 100px;
        font-weight: 700;
        text-align: left;
        padding-right: 0;
        font-size: 18px;
        color: #fff;
        margin-bottom: 4px;

        &:before {
            display: none;
        }
    }

    & dd {
        width: 100%;
        
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
    padding: 40px 30px;

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
    gap: 25px;
    flex-wrap: wrap;
    margin-top: 15px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const SelectMbox = styled.a`
    display: block;
    min-width: 300px;
    max-width: 400px;
    flex: 1;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    background-color: #3a3a3a;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
        opacity: 0.85;
        transform: translateY(-3px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

        img {
            transform: scale(1.05);
        }
    }

    ${({ choiceWinner }) => 
    choiceWinner &&
    `
    &:hover {
      opacity: 1;
      cursor:default;
      transform: translateY(0);
      
      img {
        transform: scale(1)
      }
    }
  `}

    img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.2s ease;
    }

    .title {
        background-color: #4a4a4a;
        min-height: 55px;
        padding: 12px 10px;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
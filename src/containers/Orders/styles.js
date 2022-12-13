import styled from "styled-components";

export const Wrapped = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height: 100vh;
    width: 100vw;
`

export const OrderCard = styled.div`
    width: 342px;
    height: 101px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 50px;

    div {
        display: flex;
        flex-direction: column;
        background: none;

        h2 {
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
            background: none;
            margin: 17px 0px 0px 27px;
        }

        p {
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
            background: none;
            margin: 24px 0px 0px 27px;
        }
    }

    button {
        background: none;
        border: none;
        cursor: pointer;

        img {
            background: none;
            margin-right: 15px;
        }
        
        :hover {
            opacity: 0.7;
        }

        :active {
           opacity: 0.4
        }
    }
`
import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;

    background-color: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14);' : '#D93856'};

    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    margin-top: 34px;
    margin-bottom: 51px;

    :hover {
        opacity: 0.7;
    }

    :active {
        opacity: 0.4
    }
`
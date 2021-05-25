import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Top = styled.div`
    margin: 100px;
`;

export const Middle = styled.div`
    text-align: center;
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    justify-content: flex-start;
`;

export const MiddleLeft = styled.div`
    display: flex;
    flex: 1 1 1%;
`;

export const MiddleLeftButtons = styled.div`
    background: #f9da2e;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-size: 22px;
    color: #4b6c8d;
    letter-spacing: 0;
    width: 55px;
    height: 236px;
    margin-left: 15px;
    padding: 10px 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #4b6c8d;

    .button {
        cursor: pointer;
    }

    .active {
        color: #2c3e50;
    }
`;

export const MiddleRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
`;

export const Apod = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ApodButton = styled.div`
    background: ${({ theme }) => theme.colors.notFoundBackToHomeButtonBg};
    border-radius: 2px;
    padding: 10px 20px;
    font-family: Arial;
    border: 2px solid ${({ theme }) => theme.colors.notFoundHeading};
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.notFoundBackToHomeButtonColor};
    letter-spacing: 0;
    cursor: pointer;
    margin-top: 20px;
`;

export const TopText = styled.div`
    font-size: 54px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.notFoundHeading};
`;

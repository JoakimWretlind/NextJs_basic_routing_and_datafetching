import styled from 'styled-components';

export const FourOFour = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: maroon;
`;

export const H1 = styled.h1`
    font-size: clamp(3rem, 18vw, 24rem);
    color: #f1f1f1;
    font-family: 'oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: clamp(.3rem, 2vw, 2rem);
`;

export const A = styled.a`
    text-transform: uppercase;
    color: #f1f1f1;
    font-size: clamp(1.2rem ,2vw, 3rem);
    letter-spacing: clamp(.3rem, 2vw, 1rem);
    border: .1rem solid #f1f1f1;
    padding: .6rem 1.8rem;
    border-radius: .4rem;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        background: #f1f1f1;
        color: maroon
    }
`;


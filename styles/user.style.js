import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    min-height: 91vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10vh;
    background: #f1f1f1;
`;

export const Header = styled.h2`
    color: #333;
    text-transform: uppercase;
    font-family: 'oswald', sans-serif;
    font-size: clamp(2rem, 3vw, 7rem);
    letter-spacing: clamp(.2rem, 2vw, 1.2rem);
    margin-bottom: 1rem;
`;

export const Ninja = styled.div`
    margin: .7rem 0;
`;

export const A = styled.a`
    font-size: 1.6rem;
    font-family: 'lato', sans-serif;
    font-weight: 500;
    letter-spacing: .1rem;
    padding-left: 1rem;
    border-left: .8rem solid transparent;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        border-left: .8rem solid aqua;
    }
`;

export const P = styled.p`
    font-size: 1.8rem;
    line-height: 1.4;
`;

export const Back = styled.a`
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-top: 3rem;
    font-family: 'lato', sans-serif;
    font-weight: 700;
    letter-spacing: .7rem;
    padding: .6rem 1.8rem;
    border: .1rem solid transparent;
    border-radius: .4rem;
    background-color: #333;
    color: #f1f1f1;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        background-color: #f1f1f1;
        color: #333;
        border: .1rem solid #333;
    }
`;
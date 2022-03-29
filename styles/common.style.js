import styled from 'styled-components';

export const Section = styled.section`
    height: 91vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
`;

export const Header = styled.h1`
    color: #333;
    text-transform: uppercase;
    font-family: 'oswald', sans-serif;
    font-size: clamp(3rem, 12vw, 14rem);
    letter-spacing: clamp(.3rem, 2vw, 2rem);
`;

export const H3 = styled.h3`
    color: #333;
    text-transform: uppercase;
    font-family: 'oswald', sans-serif;
    font-size: clamp(2rem, 3vw, 7rem);
    letter-spacing: clamp(.2rem, 2vw, 1.2rem);
`;
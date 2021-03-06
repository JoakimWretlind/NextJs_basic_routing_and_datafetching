import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 6rem;
    width: 100%;
    max-width: 130rem;
    padding-left: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .2s ease-out;
`;

export const NavUL = styled.ul`
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 46rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLi = styled.li`
    padding: 1rem;
`;

export const NavA = styled.a`
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #333;
    letter-spacing: .1rem;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        color: red;
    }
`;
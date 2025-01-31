import React from 'react';
import styled from 'styled-components';

const StNav = styled.nav`
    background-color: white;
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StSpan = styled.span`
    padding: 20px;
    font-weight: bolder;
`;
const Header = () => {
    return (
            <StNav>
                <StSpan>My Todo List</StSpan>
                <StSpan>React</StSpan>
            </StNav>
    );
};

export default Header;

import React from 'react';
import styled from 'styled-components';

import mediaQuery from '@styles/mediaQuery';

export default function Navigation() {
    return (
        <StyledNavigation>
            <button>left</button>
            <ul>
                <li>JavaScript</li>
                <li>StyledComponents</li>
                <li>React</li>
            </ul>
            <button>right</button>
        </StyledNavigation>
    );
}

const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid black;

    > div {
        display: flex;
        justify-content: center;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        ${mediaQuery('lg')`
            max-width: 50rem;
            margin: 0 2rem;
        `}
    }

    li {
        &:not(:last-child) {
            margin: 0 2rem 0 0;
        }
    }

    button {
        display: none;

        ${mediaQuery('lg')`
            display: block;
        `}
    }
`;

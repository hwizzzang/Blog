import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Bio from '@components/Bio';
import { Container, Wrapper } from '@styles/mixIn';

export default function Header() {
    return (
        <StyledHeader>
            <div>
                <h1>
                    <Link to="/"> Hwizzang blog</Link>
                </h1>
                <Bio />
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    ${Container}

    h1 {
        width: fit-content;
        margin: 2rem auto;
        text-align: center;
        font-size: 4rem;
    }

    > div {
        ${Wrapper}
    }
`;

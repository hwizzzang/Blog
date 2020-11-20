import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Bio from '@components/Bio';
import { Wrapper } from '@styles/mixIn';

export default function Header() {
    return (
        <StyledHeader>
            <h1>
                <Link to="/"> Hwizzang blog</Link>
            </h1>
            <Bio />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
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

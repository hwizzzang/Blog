import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container, Wrapper } from '@styles/mixIn';

import { HeaderProps } from '@interfaces/components/header';
import Bio from '@components/Bio';

export default function Header(props: HeaderProps) {
    const { title } = props;

    return (
        <StyledHeader>
            <div>
                <h1>Hwizzang blog</h1>
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

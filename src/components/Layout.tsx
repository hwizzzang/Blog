import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';
import { LayoutProps } from '@interfaces/components/layout';
import GlobalStyles from '@styles/global';
import mediaQuery from '@styles/mediaQuery';
import { Container, Wrapper } from '@styles/mixIn';

export default function Layout(props: LayoutProps) {
    const { children, title } = props;

    return (
        <>
            <GlobalStyles />
            <StyledGridWrapper>
                <Header title={title} />
                <StyledNavigation>
                    <div>
                        <button>left</button>
                        <ul>
                            <li>JavaScript</li>
                            <li>StyledComponents</li>
                            <li>React</li>
                        </ul>
                        <button>right</button>
                    </div>
                </StyledNavigation>
                <StyledMainWrapper>
                    <div>{children}</div>
                </StyledMainWrapper>
                <StyledFooter>
                    <div>©Hwizzzang</div>
                </StyledFooter>
            </StyledGridWrapper>
        </>
    );
}

export const StyledGridWrapper = styled.div`
    display: grid;
`;

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid black;
    ${Container}

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
    }
`;

export const StyledMainWrapper = styled.main`
    border: 0.1rem solid black;
    ${Container}

    > div {
        ${Wrapper}
    }
`;
export const StyledFooter = styled.footer`
    border: 0.1rem solid black;
    ${Container}

    > div {
        ${Wrapper}
    }
`;

import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';
import Navigation from '@components/Navigation';
import { LayoutProps } from '@interfaces/components/layout';
import GlobalStyles from '@styles/global';
import { Container, Wrapper } from '@styles/mixIn';

export default function Layout(props: LayoutProps) {
    const { children, title } = props;

    return (
        <>
            <GlobalStyles />
            <StyledGridWrapper>
                <Header />
                <Navigation />
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

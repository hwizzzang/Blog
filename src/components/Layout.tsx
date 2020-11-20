import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';
import Navigation from '@components/Navigation';
import { LayoutProps } from '@interfaces/components/layout';
import GlobalStyles from '@styles/global';
import { Wrapper } from '@styles/mixIn';

export default function Layout(props: LayoutProps) {
    const { children, title } = props;

    return (
        <>
            <GlobalStyles />
            <StyledGridWrapper>
                <Header />
                <Navigation />
                <StyledMainWrapper>{children}</StyledMainWrapper>
                <StyledFooter>
                    <span>©Hwizzzang</span>
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

    > div {
        ${Wrapper}
    }
`;
export const StyledFooter = styled.footer`
    border: 0.1rem solid black;

    > div {
        ${Wrapper}
    }
`;
